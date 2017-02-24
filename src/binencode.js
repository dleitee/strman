/**
 * Convert string chars to binary unicode (16 digits)
 * @playground
 * var binEncode = require('strman').binEncode;
 * let result = binEncode("strman");
 * @param {String} value - Value to encode
 * @returns {String} - String in binary format.
 */
const binEncode = (value) =>  encode(value, LENGTH_BINARY, BASE_BINARY);

export {binEncode};
