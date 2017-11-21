// @flow
import { LENGTH_DECIMAL, BASE_DECIMAL } from './lib/numericalbase'
import decode from './lib/decode'

/**
 * @module decDecode
 * @description
 * Convert binary unicode (16 digits) string to string chars
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the decDecode function
 * ```sh
 * yarn add strman.decdecode
 * ```
 * ## Usage
 * ```javascript
 * import { decDecode } from 'strman'
 * // OR
 * import decDecode from 'strman.decdecode'
 * ```
 * @param {String} value - Value to decode
 * @example
 * decDecode('001150011600114001090009700110')
 * // => 'strman'
 * @returns {String} String decoded.
 */
export default (value:string):string => decode(value, LENGTH_DECIMAL, BASE_DECIMAL)
