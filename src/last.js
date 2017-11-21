// @flow
import substr from './substr'
/**
 * @module last
 * @description
 * Return the last 'n' chars of string.
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the last function
 * ```sh
 * yarn add strman.last
 * ```
 * ## Usage
 * ```javascript
 * import { last } from 'strman'
 * // OR
 * import last from 'strman.last'
 * ```
 * @param {String} value The String!
 * @param {Number} n Number of chars to return.
 * @example
 * const title = 'strman'
 * last(title, 3)
 * // => 'man'
 * @returns {String} Return 'n' lasts chars.
 */
export default (value:string, n:number):string => substr(value, -1 * n, n)
