"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getLocalCart = JSON.parse(localStorage.getItem('cart') || "[]");
var initCart = {
  cartItems: getLocalCart,
  cartNumber: getLocalCart.length
};

var cartReducer = function cartReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initCart;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "ADD_TO_CART":
      var item = {
        id: action.playload.data.id,
        name: action.playload.data.title,
        price: action.playload.data.price,
        img: action.playload.data.image,
        quantity: 1
      };
      var checkExist = false;
      state.cartItems.map(function (item, key) {
        if (item.id === action.playload.data.id) {
          state.cartItems[key].quantity++;
          checkExist = true;
        }
      });

      if (!checkExist) {
        state.cartItems.push(item);
        localStorage.setItem('cart', JSON.stringify(state.cartItems));
        return _objectSpread({}, state, {
          cartItems: state.cartItems,
          cartNumber: state.cartNumber + 1
        });
      } else {
        localStorage.setItem('cart', JSON.stringify(state.cartItems));
        return _objectSpread({}, state, {
          cartItems: state.cartItems
        });
      }

    case "UPDATE_CART":
      state.cartItems.map(function (item, key) {
        if (item.id === action.playload.id) {
          state.cartItems[key].quantity = action.playload.quantity;
        }
      });
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
      return _objectSpread({}, state, {
        cartItems: state.cartItems
      });

    case "REMOVE_FROM_CART":
      localStorage.setItem('cart', JSON.stringify(action.playload));
      return _objectSpread({}, state, {
        cartItems: action.playload,
        cartNumber: action.playload.length
      });

    case "CHECK_OUT_CART":
      state.cartItems = [];
      localStorage.setItem('cart', JSON.stringify(action.playload));
      return _objectSpread({}, state, {
        cartItems: action.playload,
        cartNumber: action.playload.length
      });

    default:
      return state;
  }
};

var _default = cartReducer;
exports["default"] = _default;