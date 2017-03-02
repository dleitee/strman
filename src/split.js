/**
 * Alias to split function.
 * @playground
 * var split = require('strman').split;
 * let title = "strman";
 * let result = split(title, '');
 * @param {String} value - The String!.
 * @param {String} separator - Split separator.
 * @param {Number} limit - Split limit.
 * @return {String} - The String splited!
 */
export default (value, separator, limit = undefined) => value.split(separator, limit)
