"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkOutCart = exports.removeFromCart = exports.updateCart = exports.addToCart = void 0;

var addToCart = function addToCart(data) {
  var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return {
    type: "ADD_TO_CART",
    playload: {
      data: data,
      quantity: quantity
    }
  };
};

exports.addToCart = addToCart;

var updateCart = function updateCart(data, quantity) {
  return {
    type: "UPDATE_CART",
    playload: data
  };
};

exports.updateCart = updateCart;

var removeFromCart = function removeFromCart(data) {
  return {
    type: "REMOVE_FROM_CART",
    playload: data
  };
};

exports.removeFromCart = removeFromCart;

var checkOutCart = function checkOutCart(data) {
  return {
    type: "CHECK_OUT_CART",
    playload: data
  };
};

exports.checkOutCart = checkOutCart;