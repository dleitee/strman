/**
 * Convert binary unicode (16 digits) string to string chars
 * @playground
 * var binDecode = require('strman').binDecode;
 * let result = binDecode("000000000111001100000000011101000000000001110010000000000110110100000000011000010000000001101110");
 * @param {String} value - Value to decode
 * @returns {String} - String decoded.
 */
const binDecode = (value) => decode(value, LENGTH_BINARY, BASE_BINARY);

export {binDecode};
