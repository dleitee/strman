/**
 * Return the first 'n' chars of string.
 * @playground
 * var first = require('strman').first;
 * let title = "strman";
 * let result = first(title, 3);
 * @param {String} value - The String!.
 * @param {String} n - Number of chars to return.
 * @return {String} - Return 'n' firsts chars.
 */
const first = (value, n) => substr(value, 0, n);

export {first};
