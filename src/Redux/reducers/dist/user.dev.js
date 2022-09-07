"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var itemUser = JSON.parse(localStorage.getItem('user') || null);
var initState = {
  userId: itemUser,
  userPost: []
};

var UserReducer = function UserReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "POST_USER":
      return _objectSpread({}, state, {
        userPost: action.playload
      });

    case "SAVE_USER":
      localStorage.setItem('user', JSON.stringify(action.playload));
      return _objectSpread({}, state, {
        userId: action.playload
      });

    case "REMOVE_USER":
      console.log(action.playload);
      localStorage.setItem('user', JSON.stringify(action.playload));
      return _objectSpread({}, state, {
        userId: action.playload
      });

    default:
      return state;
  }
};

var _default = UserReducer;
exports["default"] = _default;