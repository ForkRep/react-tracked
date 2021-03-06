"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUseUpdate = void 0;

var _react = require("react");

var _createProvider = require("./createProvider");

var createUseUpdate = function createUseUpdate(context) {
  var useUpdate = function useUpdate() {
    var _useContext = (0, _react.useContext)(context),
        update = _useContext[_createProvider.UPDATE_CONTEXT_PROPERTY];

    return update;
  };

  return useUpdate;
};

exports.createUseUpdate = createUseUpdate;