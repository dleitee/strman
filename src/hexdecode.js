import { LENGTH_HEXADECIMAL, BASE_HEXADECIMAL } from './lib/numericalbase'
import decode from './lib/decode'

/**
 * Convert hexadecimal unicode (4 digits) string to string chars
 * @playground
 * var hexDecode = require('strman').hexDecode;
 * let result = hexDecode("007300740072006d0061006e");
 * @param {String} value - Value to decode
 * @returns {String} - String decoded.
 */
export default value => decode(value, LENGTH_HEXADECIMAL, BASE_HEXADECIMAL)
