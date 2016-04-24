'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slugify = require('./slugify');

Object.keys(_slugify).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _slugify[key];
    }
  });
});

var _string = require('./string.utils');

Object.keys(_string).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _string[key];
    }
  });
});

var _string2 = require('./string.cases');

Object.keys(_string2).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _string2[key];
    }
  });
});