"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPhoneNumberRegex = exports.createPasswordRegex = exports.createEmailRegex = exports.createDateRegex = void 0;
// src/createValidationRegex.js

var createPasswordRegex = exports.createPasswordRegex = function createPasswordRegex(_ref) {
  var minLength = _ref.minLength,
    uppercase = _ref.uppercase,
    lowercase = _ref.lowercase,
    digits = _ref.digits,
    specialChar = _ref.specialChar;
  var pattern = '^';
  if (minLength) {
    pattern += "(?=.{".concat(minLength, ",})"); // 최소 길이
  }
  if (uppercase) {
    pattern += '(?=.*[A-Z])'; // 대문자 포함
  }
  if (lowercase) {
    pattern += '(?=.*[a-z])'; // 소문자 포함
  }
  if (digits) {
    pattern += '(?=.*\\d)'; // 숫자 포함
  }
  if (specialChar) {
    pattern += '(?=.*[!@#$%^&*(),.?":{}|<>])'; // 특수문자 포함
  }
  pattern += '[A-Za-z\\d!@#$%^&*(),.?":{}|<>]+$'; // 가능한 문자 (대소문자, 숫자, 특수문자)

  return pattern;
};
var createEmailRegex = exports.createEmailRegex = function createEmailRegex() {
  return /^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]{2,6}$/;
};
var createPhoneNumberRegex = exports.createPhoneNumberRegex = function createPhoneNumberRegex() {
  return /^0[1-9]\d{8,9}$/;
};
var createDateRegex = exports.createDateRegex = function createDateRegex() {
  return /^(?:\d{4})-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12][0-9]|3[01])$/;
};