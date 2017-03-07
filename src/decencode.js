import { LENGTH_DECIMAL, BASE_DECIMAL } from './lib/numericalbase'
import encode from './lib/encode'
/**
 * Convert string chars to decimal unicode (5 digits)
 * @playground
 * var decEncode = require('strman').decEncode;
 * let result = decEncode("strman");
 * @param {String} value - Value to encode
 * @returns {String} - String in decimal format.
 */
export default value => encode(value, LENGTH_DECIMAL, BASE_DECIMAL)
