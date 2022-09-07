"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _cart = _interopRequireDefault(require("./cart"));

var _user = _interopRequireDefault(require("./user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var allReducer = (0, _redux.combineReducers)({
  cart: _cart["default"],
  user: _user["default"]
});
var _default = allReducer;
exports["default"] = _default;