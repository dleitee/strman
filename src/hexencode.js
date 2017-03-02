/**
 * Convert string chars to hexadecimal unicode (4 digits)
 * @playground
 * var hexEncode = require('strman').hexEncode;
 * let result = hexEncode("strman");
 * @param {String} value - Value to encode
 * @returns {String} - String in hexadecimal format.
 */
const hexEncode = (value) => encode(value, LENGTH_HEXADECIMAL, BASE_HEXADECIMAL);


