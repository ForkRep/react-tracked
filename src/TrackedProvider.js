import {
  createContext,
  createElement,
  useCallback,
  useEffect,
  useRef,
} from 'react';

import { batchedUpdates } from './batchedUpdates';

// context
const warningObject = {
  get state() {
    throw new Error('Please use <TrackedProvider ...>');
  },
  get dispatch() {
    throw new Error('Please use <TrackedProvider ...>');
  },
  get subscribe() {
    throw new Error('Please use <TrackedProvider ...>');
  },
};
const calculateChangedBits = (a, b) => (
  a.dispatch !== b.dispatch || a.subscribe !== b.subscribe ? 1 : 0
);
export const defaultContext = createContext(warningObject, calculateChangedBits);

export const TrackedProvider = ({
  useValue,
  customContext = defaultContext,
  children,
}) => {
  const [state, dispatch] = useValue();
  const listeners = useRef([]);
  useEffect(() => {
    batchedUpdates(() => {
      listeners.current.forEach(listener => listener(state));
    });
  }, [state]);
  const subscribe = useCallback((listener) => {
    listeners.current.push(listener);
    const unsubscribe = () => {
      const index = listeners.current.indexOf(listener);
      listeners.current.splice(index, 1);
    };
    return unsubscribe;
  }, []);
  return createElement(
    customContext.Provider,
    { value: { state, dispatch, subscribe } },
    children,
  );
};