'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.htmlDecode = exports.base64Decode = exports.urlDecode = exports.decDecode = exports.binDecode = exports.hexDecode = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _entities = require('./lib/entities');

var _strman = require('./strman');

var _numerical = require('./lib/numerical.base');

var decode = function decode(value, length, base) {
  return value.match(new RegExp('.{1,' + length + '}', 'g')).map(function (string) {
    return String.fromCharCode(parseInt(string, base));
  }).join('');
};

/**
 * Convert hexadecimal unicode (4 digits) string to string chars
 * @playground
 * var hexDecode = require('strman').hexDecode;
 * let result = hexDecode("007300740072006d0061006e");
 * @param {String} value - Value to decode
 * @returns {String} - String decoded.
 */
var hexDecode = function hexDecode(value) {
  return decode(value, _numerical.LENGTH_HEXADECIMAL, _numerical.BASE_HEXADECIMAL);
};

exports.hexDecode = hexDecode;

/**
 * Convert binary unicode (16 digits) string to string chars
 * @playground
 * var binDecode = require('strman').binDecode;
 * let result = binDecode("000000000111001100000000011101000000000001110010000000000110110100000000011000010000000001101110");
 * @param {String} value - Value to decode
 * @returns {String} - String decoded.
 */

var binDecode = function binDecode(value) {
  return decode(value, _numerical.LENGTH_BINARY, _numerical.BASE_BINARY);
};

exports.binDecode = binDecode;

/**
 * Convert binary unicode (16 digits) string to string chars
 * @playground
 * var decDecode = require('strman').decDecode;
 * let result = decDecode("001150011600114001090009700110");
 * @param {String} value - Value to decode
 * @returns {String} - String decoded.
 */

var decDecode = function decDecode(value) {
  return decode(value, _numerical.LENGTH_DECIMAL, _numerical.BASE_DECIMAL);
};

exports.decDecode = decDecode;

/**
 * Decodes URL-encoded string
 * @playground
 * var urlDecode = require('strman').urlDecode;
 * let result = urlDecode("https://github.com/dleitee/strman/&name=%C3%A1%C3%A9%C3%AD%C3%B3%C3%BA");
 * @param {String} value - The string to be decoded
 * @returns {String} - Returns the decoded string.
 */

var urlDecode = function urlDecode(value) {
  return decodeURI(value);
};

exports.urlDecode = urlDecode;

/**
 * Decodes data encoded with MIME base64
 * @playground
 * var base64Decode = require('strman').base64Decode;
 * let result = base64Decode("c3RybWFu");
 * @param {String} value - The data to decode.
 * @returns - The decoded data.
 */

var base64Decode = function base64Decode(value) {
  return new Buffer(value, 'base64').toString();
};

exports.base64Decode = base64Decode;

/**
 * Convert all HTML entities to applicable characters.
 * @playground
 * var htmlDecode = require('strman').htmlDecode;
 * let result = htmlDecode('&lt;div&gt;');
 * @params {String} value - value to decode.
 * @returns - The decoded data.
 */

var htmlDecode = function htmlDecode(value) {
  return (0, _strman.replace)(value, '(&\\w+;)', function (match, index) {
    return _typeof(_entities.entitiesDecode.get(index)) !== undefined ? _entities.entitiesDecode.get(index) : match;
  });
};

exports.htmlDecode = htmlDecode;