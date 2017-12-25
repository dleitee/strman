// @flow
import { LENGTH_BINARY, BASE_BINARY } from './lib/numericalbase'
import decode from './lib/decode'

/**
 * @module binDecode
 * @description
 * Convert binary unicode (16 digits) string to string chars
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the binDecode function
 * ```sh
 * yarn add strman.bindecode
 * ```
 * ## Usage
 * ```javascript
 * import { binDecode } from 'strman'
 * // OR
 * import binDecode from 'strman.bindecode'
 * ```
 * @param {String} value Value to decode
 * @example
 * const binary = '00000000011100110000000001110100000000000111001000000000011011010000000001100001'
 * binDecode(binary)
 * // => 'strman'
 * @returns {String}  String decoded.
 */
export default (value: string): string => decode(value, LENGTH_BINARY, BASE_BINARY)
