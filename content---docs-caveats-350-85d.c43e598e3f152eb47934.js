(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{37:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));n(0);var r=n(59);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={id:"caveats",title:"Caveats",sidebar_label:"Caveats"},s=[{value:"Proxied states are referentially equal only in per-hook basis",id:"proxied-states-are-referentially-equal-only-in-per-hook-basis",children:[]},{value:"An object referential change doesn't trigger re-render if an property of the object is accessed in previous render",id:"an-object-referential-change-doesnt-trigger-re-render-if-an-property-of-the-object-is-accessed-in-previous-render",children:[]},{value:"Proxied state shouldn't be used outside of render",id:"proxied-state-shouldnt-be-used-outside-of-render",children:[]}],c={rightToc:s},l="wrapper";function d(e){var t=e.components,n=o(e,["components"]);return Object(r.b)(l,a({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Proxy and state usage tracking may not work 100% as expected.\nThere are some limitations and workarounds."),Object(r.b)("h2",{id:"proxied-states-are-referentially-equal-only-in-per-hook-basis"},"Proxied states are referentially equal only in per-hook basis"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"const state1 = useTrackedState();\nconst state2 = useTrackedState();\n// state1 and state2 is not referentially equal\n// even if the underlying state is referentially equal.\n")),Object(r.b)("p",null,"You should use ",Object(r.b)("inlineCode",{parentName:"p"},"useTrackedState")," only once in a component\nif you need referential equality of objects in the state."),Object(r.b)("h2",{id:"an-object-referential-change-doesnt-trigger-re-render-if-an-property-of-the-object-is-accessed-in-previous-render"},"An object referential change doesn't trigger re-render if an property of the object is accessed in previous render"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"const state = useTrackedState();\nconst { foo } = state;\nreturn <Child key={foo.id} foo={foo} />;\n\nconst Child = React.memo(({ foo }) => {\n  // ...\n};\n// if foo doesn't change, Child won't render, so foo.id is only marked as used.\n// it won't trigger Child to re-render even if foo is changed.\n")),Object(r.b)("p",null,"You need to explicitly notify an object as used in a memoized component."),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"import { trackMemo } from 'react-tracked';\n\nconst Child = React.memo(({ foo }) => {\n  trackMemo(foo);\n  // ...\n};\n")),Object(r.b)("h2",{id:"proxied-state-shouldnt-be-used-outside-of-render"},"Proxied state shouldn't be used outside of render"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"const state = useTrackedState();\nconst dispatch = useUpdate();\ndispatch({ type: 'FOO', value: state.foo }); // This may lead unexpected behavior if state.foo is an object\ndispatch({ type: 'FOO', value: state.fooStr }); // This is OK if state.fooStr is a string\n")),Object(r.b)("p",null,"It's recommended to use primitive values for ",Object(r.b)("inlineCode",{parentName:"p"},"dispatch"),", ",Object(r.b)("inlineCode",{parentName:"p"},"setState")," and others."),Object(r.b)("p",null,"In case you need to pass an object itself, here's a workaround."),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-javascript"}),"import { getUntrackedObject } from 'react-tracked';\n\ndispatch({ type: 'FOO', value: getUntrackedObject(state.foo) });\n")))}d.isMDXComponent=!0},59:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return p}));var r=n(0),a=n.n(r),o=a.a.createContext({}),i=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},s=function(e){var t=i(e.components);return a.a.createElement(o.Provider,{value:t},e.children)};var c="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),d=i(n),p=r,u=d[s+"."+p]||d[p]||l[p]||o;return n?a.a.createElement(u,Object.assign({},{ref:t},c,{components:n})):a.a.createElement(u,Object.assign({},{ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);