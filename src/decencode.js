/**
 * Convert string chars to decimal unicode (5 digits)
 * @playground
 * var decEncode = require('strman').decEncode;
 * let result = decEncode("strman");
 * @param {String} value - Value to encode
 * @returns {String} - String in decimal format.
 */
const decEncode = (value) => encode(value, LENGTH_DECIMAL, BASE_DECIMAL);

export {decEncode};
