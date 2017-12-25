// @flow
import { LENGTH_HEXADECIMAL, BASE_HEXADECIMAL } from './lib/numericalbase'
import encode from './lib/encode'
/**
 * @module hexEncode
 * @description
 * Convert string chars to hexadecimal unicode (4 digits)
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the hexEncode function
 * ```sh
 * yarn add strman.hexencode
 * ```
 * ## Usage
 * ```javascript
 * import { hexEncode } from 'strman'
 * // OR
 * import hexEncode from 'strman.hexencode'
 * ```
 * @param {String} value - Value to encode
 * @example
 * hexEncode('strman')
 * // => '007300740072006d0061006e'
 * @returns {String} String in hexadecimal format.
 */
export default (value: string): string => encode(value, LENGTH_HEXADECIMAL, BASE_HEXADECIMAL)
