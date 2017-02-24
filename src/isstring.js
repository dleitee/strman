/**
 * Checks whether a string.
 * @playground
 * var isString = require('strman').isString;
 * let title = "A Javascript string manipulation library.";
 * let result = isString(title);
 * @param {String} value - The String!.
 * @return {Boolean} - if 'value' isString, return true, else false.
 */
const isString = value => Object.prototype.toString.call(value) === '[object String]';

export default isString;
