'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.htmlEncode = exports.base64Encode = exports.urlEncode = exports.decEncode = exports.binEncode = exports.hexEncode = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _entities = require('./lib/entities');

var _strman = require('./strman');

var _numerical = require('./lib/numerical.base');

var encode = function encode(value, length, base) {
  return (0, _strman.chars)(value).map(function (data) {
    return (0, _strman.leftPad)(data.charCodeAt(0).toString(base), length, '0');
  }).join('');
};

/**
 * Convert string chars to hexadecimal unicode (4 digits)
 * @playground
 * var hexEncode = require('strman').hexEncode;
 * let result = hexEncode("strman");
 * @param {String} value - Value to encode
 * @returns {String} - String in hexadecimal format.
 */
var hexEncode = function hexEncode(value) {
  return encode(value, _numerical.LENGTH_HEXADECIMAL, _numerical.BASE_HEXADECIMAL);
};

exports.hexEncode = hexEncode;

/**
 * Convert string chars to binary unicode (16 digits)
 * @playground
 * var binEncode = require('strman').binEncode;
 * let result = binEncode("strman");
 * @param {String} value - Value to encode
 * @returns {String} - String in binary format.
 */

var binEncode = function binEncode(value) {
  return encode(value, _numerical.LENGTH_BINARY, _numerical.BASE_BINARY);
};

exports.binEncode = binEncode;

/**
 * Convert string chars to decimal unicode (5 digits)
 * @playground
 * var decEncode = require('strman').decEncode;
 * let result = decEncode("strman");
 * @param {String} value - Value to encode
 * @returns {String} - String in decimal format.
 */

var decEncode = function decEncode(value) {
  return encode(value, _numerical.LENGTH_DECIMAL, _numerical.BASE_DECIMAL);
};

exports.decEncode = decEncode;

/**
 * Replaces all characters with the appropriate UTF-8 escape sequences.
 * @playground
 * var urlEncode = require('strman').urlEncode;
 * let result = urlEncode("https://github.com/dleitee/strman/&name=áéíóú");
 * @param {String} value - The string to be encoded
 * @returns {String} - Returns a string in which all non-alphanumeric characters except -_.
 */

var urlEncode = function urlEncode(value) {
  return encodeURI(value);
};

exports.urlEncode = urlEncode;

/**
 * Encodes data with MIME base64.
 * Base64-encoded data takes about 33% more space than the original data.
 * @playground
 * var base64Encode = require('strman').base64Encode;
 * let result = base64Encode("strman");
 * @param {String} value - The data to encode.
 * @returns - The encoded data.
 */

var base64Encode = function base64Encode(value) {
  return new Buffer(value).toString('base64');
};

exports.base64Encode = base64Encode;

/**
 * Convert all applicable characters to HTML entities.
 * @playground
 * var htmlEncode = require('strman').htmlEncode;
 * let result = htmlEncode('<div>');
 * @params {String} value - value to encode.
 * @returns - The encoded data.
 */

var htmlEncode = function htmlEncode(value) {
  return (0, _strman.replace)(value, '[\\u00A0-\\u9999<>\\&]', function (match) {
    return _typeof(_entities.entitiesEncode.get(match)) !== undefined ? _entities.entitiesEncode.get(match) : match;
  }, true, true);
};

exports.htmlEncode = htmlEncode;