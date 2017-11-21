// @flow
import { LENGTH_BINARY, BASE_BINARY } from './lib/numericalbase'
import encode from './lib/encode'

/**
 * @module binEncode
 * @description
 * Convert string chars to binary unicode (16 digits)
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the binEncode function
 * ```sh
 * yarn add strman.binencode
 * ```
 * ## Usage
 * ```javascript
 * import { binEncode } from 'strman'
 * // OR
 * import binEncode from 'strman.binencode'
 * ```
 * @param {String} value - Value to encode
 * @example
 * binEncode('strman')
 * // => '00000000011100110000000001110100000000000111001000000000011011010000000001100001'
 * @returns {String} String in binary format.
 */
export default (value:string):string => encode(value, LENGTH_BINARY, BASE_BINARY)
