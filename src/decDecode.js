/**
 * Convert binary unicode (16 digits) string to string chars
 * @playground
 * var decDecode = require('strman').decDecode;
 * let result = decDecode("001150011600114001090009700110");
 * @param {String} value - Value to decode
 * @returns {String} - String decoded.
 */
const decDecode = (value) => decode(value, LENGTH_DECIMAL, BASE_DECIMAL);

export {decDecode};
