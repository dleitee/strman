// @flow
import { LENGTH_DECIMAL, BASE_DECIMAL } from './lib/numericalbase'
import encode from './lib/encode'
/**
 * @module decEncode
 * @description
 * Convert string chars to decimal unicode (5 digits)
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the decEncode function
 * ```sh
 * yarn add strman.decencode
 * ```
 * ## Usage
 * ```javascript
 * import { decEncode } from 'strman'
 * // OR
 * import decEncode from 'strman.decencode'
 * ```
 * @param {String} value - Value to encode
 * @example
 * decEncode('strman')
 * // => '001150011600114001090009700110'
 * @returns {String} String in decimal format.
 */
export default (value:string):string => encode(value, LENGTH_DECIMAL, BASE_DECIMAL)
