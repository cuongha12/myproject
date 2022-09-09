"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSearch = void 0;

var createSearch = function createSearch(search) {
  return {
    type: "SEARCH_ITEM",
    playload: search
  };
};

exports.createSearch = createSearch;