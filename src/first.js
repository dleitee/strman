// @flow
import substr from './substr'
/**
 * @module first
 * @description
 * Return the first 'n' chars of string.
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the first function
 * ```sh
 * yarn add strman.first
 * ```
 * ## Usage
 * ```javascript
 * import { first } from 'strman'
 * // OR
 * import first from 'strman.first'
 * ```
 * @param {String} value - The String!
 * @param {Number} n - Number of chars to return.
 * @example
 * first('strman', 3)
 * // => 'str'
 * @returns {String}  Return `n` firsts chars.
 */
export default (value: string, n: number): string => substr(value, 0, n)
