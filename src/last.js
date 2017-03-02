import substr from './substr'

/**
 * Return the last 'n' chars of string.
 * @playground
 * var last = require('strman').last;
 * let title = "strman";
 * let result = last(title, 3);
 * @param {String} value - The String!.
 * @param {String} n - Number of chars to return.
 * @return {String} - Return 'n' lasts chars.
 */
export default (value, n) => substr(value, -1 * n, n)
