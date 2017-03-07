import { LENGTH_DECIMAL, BASE_DECIMAL } from './lib/numericalbase'
import decode from './lib/decode'
/**
 * Convert binary unicode (16 digits) string to string chars
 * @playground
 * var decDecode = require('strman').decDecode;
 * let result = decDecode("001150011600114001090009700110");
 * @param {String} value - Value to decode
 * @returns {String} - String decoded.
 */
export default value => decode(value, LENGTH_DECIMAL, BASE_DECIMAL)
