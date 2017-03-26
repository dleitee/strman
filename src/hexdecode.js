import { LENGTH_HEXADECIMAL, BASE_HEXADECIMAL } from './lib/numericalbase'
import decode from './lib/decode'

/**
 * @module hexDecode
 * @description
 * Convert hexadecimal unicode (4 digits) string to string chars
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the hexDecode function
 * ```sh
 * yarn add strman.hexdecode
 * ```
 * ## Usage
 * ```javascript
 * import { hexDecode } from 'strman'
 * // OR
 * import hexDecode from 'strman.hexdecode'
 * ```
 * @param {String} value - Value to decode
 * @example
 * hexDecode('007300740072006d0061006e')
 * // => 'strman'
 * @returns {String}  String decoded.
 */
export default value => decode(value, LENGTH_HEXADECIMAL, BASE_HEXADECIMAL)
