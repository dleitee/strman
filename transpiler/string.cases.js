'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * Transform to lowercase
 * @params value - String to lowercase
 * @return String
 */
var toLowerCase = function toLowerCase(value) {
  return value.toLowerCase();
};

exports.toLowerCase = toLowerCase;

/*
 * Transform to uppercase
 * @params value - String to uppercase
 * @return String
 */

var toUpperCase = function toUpperCase(value) {
  return value.toUpperCase();
};

exports.toUpperCase = toUpperCase;

/*
 * Verify if has lowerCase
 * @param value
 * @return boolean
 */

var isLowerCase = function isLowerCase(value) {
  return value === toLowerCase(value);
};

exports.isLowerCase = isLowerCase;
/*
 * Verify if has upperCase
 * @param value
 * @return boolean
 */

var isUpperCase = function isUpperCase(value) {
  return value === toUpperCase(value);
};

exports.isUpperCase = isUpperCase;

/*
 * Transform to StudlyCaps
 * @params value
 * @return string
 */

var toStudlyCaps = function toStudlyCaps(value) {
  var string = value.replace(/[\-_\s]+(.)?/g, function (match, chr) {
    return chr ? toUpperCase(chr) : '';
  });
  return toUpperCase(string.substr(0, 1)) + string.substr(1);
};

exports.toStudlyCaps = toStudlyCaps;

/*
 * Transform to camelCase
 * @params value
 * @return string
 */

var toCamelCase = function toCamelCase(value) {
  var string = toStudlyCaps(value);
  return toLowerCase(string.substr(0, 1)) + string.substr(1);
};

exports.toCamelCase = toCamelCase;

/*
 * Decamelize String
 * @params value
 * @return string
 */

var toDecamelize = function toDecamelize(value) {
  var chr = arguments.length <= 1 || arguments[1] === undefined ? '_' : arguments[1];

  var camel = toCamelCase(value);
  var string = camel.replace(/([A-Z])+/g, chr + '$1');
  return toLowerCase(string);
};

exports.toDecamelize = toDecamelize;

/*
 * Decamelize snake_case
 * @params value
 * @return string
 */

var toSnakeCase = function toSnakeCase(value) {
  return toDecamelize(value, '_');
};

exports.toSnakeCase = toSnakeCase;

/*
 * Decamelize kebab-case
 * @params value
 * @return string
 */

var toKebabCase = function toKebabCase(value) {
  return toDecamelize(value, '-');
};

exports.toKebabCase = toKebabCase;