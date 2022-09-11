"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditUser = exports.RemoveUserToLocalStorage = exports.saveUserToLocalStorage = exports.createUser = void 0;

var createUser = function createUser(user) {
  return {
    type: "POST_USER",
    playload: user
  };
};

exports.createUser = createUser;

var saveUserToLocalStorage = function saveUserToLocalStorage(user) {
  return {
    type: "SAVE_USER",
    playload: user
  };
};

exports.saveUserToLocalStorage = saveUserToLocalStorage;

var RemoveUserToLocalStorage = function RemoveUserToLocalStorage(user) {
  return {
    type: "REMOVE_USER",
    playload: user
  };
};

exports.RemoveUserToLocalStorage = RemoveUserToLocalStorage;

var EditUser = function EditUser(user) {
  return {
    type: "EDIT_USER",
    playload: user
  };
};

exports.EditUser = EditUser;