'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
* Transform to lowercase.
* @playground
* var toLowerCase = require('strman').toLowerCase;
* let title = "A Javascript string manipulation library.";
* let result = toLowerCase(title);
* @param {String} value - The String!.
* @return {String} - String in lowercase.
*/
var toLowerCase = function toLowerCase(value) {
  return value.toLowerCase();
};

exports.toLowerCase = toLowerCase;

/**
 * Transform to uppercase.
 * @playground
 * var toUpperCase = require('strman').toUpperCase;
 * let title = "A Javascript string manipulation library.";
 * let result = toUpperCase(title);
 * @param {String} value - The String!.
 * @return {String} - String in uppercase.
 */

var toUpperCase = function toUpperCase(value) {
  return value.toUpperCase();
};

exports.toUpperCase = toUpperCase;

/**
* Verify if has lowerCase
* @playground
* var isLowerCase = require('strman').isLowerCase;
* let title = "A Javascript string manipulation library.";
* let result = isLowerCase(title);
* @param {String} value - The String!.
* @return {Boolean} - String is lowercase?.
*/

var isLowerCase = function isLowerCase(value) {
  return value === toLowerCase(value);
};

exports.isLowerCase = isLowerCase;

/**
* Verify if has UPPERCASE
* @playground
* var isUpperCase = require('strman').isUpperCase;
* let title = "A Javascript string manipulation library.";
* let result = isUpperCase(title);
* @param {String} value - The String!.
* @return {Boolean} - String is UPPERCASE?.
*/

var isUpperCase = function isUpperCase(value) {
  return value === toUpperCase(value);
};

exports.isUpperCase = isUpperCase;

/**
 * Transform to StudlyCaps.
 * @playground
 * var toStudlyCaps = require('strman').toStudlyCaps;
 * let title = "A Javascript string manipulation library.";
 * let result = toStudlyCaps(title);
 * @param {String} value - The String!.
 * @return {String} - String in StudlyCaps.
 */

var toStudlyCaps = function toStudlyCaps(value) {
  var string = value.replace(/[\-_\s]+(.)?/g, function (match, chr) {
    return chr ? toUpperCase(chr) : '';
  });
  return toUpperCase(string.substr(0, 1)) + string.substr(1);
};

exports.toStudlyCaps = toStudlyCaps;

/**
 * Transform to camelCase.
 * @playground
 * var toCamelCase = require('strman').toCamelCase;
 * let title = "A Javascript string manipulation library.";
 * let result = toCamelCase(title);
 * @param {String} value - The String!.
 * @return {String} - String in camelCase.
 */

var toCamelCase = function toCamelCase(value) {
  var string = toStudlyCaps(value);
  return toLowerCase(string.substr(0, 1)) + string.substr(1);
};

exports.toCamelCase = toCamelCase;

/**
* Decamelize String
* @playground
* var toDecamelize = require('strman').toDecamelize;
* let title = "A Javascript string manipulation library.";
* let result = toDecamelize(title);
* @param {String} value - The String!.
* @return {String} - String decamelized.
*/

var toDecamelize = function toDecamelize(value) {
  var chr = arguments.length <= 1 || arguments[1] === undefined ? '_' : arguments[1];

  var camel = toCamelCase(value);
  var string = camel.replace(/([A-Z])+/g, chr + '$1');
  return toLowerCase(string);
};

exports.toDecamelize = toDecamelize;

/**
 * Transform to snake_case.
 * @playground
 * var toSnakeCase = require('strman').toSnakeCase;
 * let title = "A Javascript string manipulation library.";
 * let result = toSnakeCase(title);
 * @param {String} value - The String!.
 * @return {String} - String in snake_case.
 */

var toSnakeCase = function toSnakeCase(value) {
  return toDecamelize(value, '_');
};

exports.toSnakeCase = toSnakeCase;

/**
 * Transform to kebab-case.
 * @playground
 * var toKebabCase = require('strman').toKebabCase;
 * let title = "A Javascript string manipulation library.";
 * let result = toKebabCase(title);
 * @param {String} value - The String!.
 * @return {String} - String in kebab-case.
 */

var toKebabCase = function toKebabCase(value) {
  return toDecamelize(value, '-');
};

exports.toKebabCase = toKebabCase;