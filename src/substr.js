/**
 * Alias to substr function.
 * @playground
 * var substr = require('strman').substr;
 * let title = "strman";
 * let result = substr(title, 0, 3);
 * @param {String} value - The String!.
 * @param {Number} start - Substring starts.
 * @param {Number} length - Substring length.
 * @return {String} - The Substring!
 */
export default (value, start, length = undefined) => value.substr(start, length)
