import { LENGTH_BINARY, BASE_BINARY } from './lib/numerical.base'
import decode from './lib/decode'

/**
 * Convert binary unicode (16 digits) string to string chars
 * @playground
 * var binDecode = require('strman').binDecode;
 * var binary = "00000000011100110000000001110100000000000111001000000000011011010000000001100001"
 * let result = binDecode(binary);
 * @param {String} value - Value to decode
 * @returns {String} - String decoded.
 */
export default value => decode(value, LENGTH_BINARY, BASE_BINARY)
