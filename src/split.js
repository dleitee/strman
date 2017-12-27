// @flow
/**
 * @module split
 * @description
 * Alias to split function.
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the split function
 * ```sh
 * yarn add strman.split
 * ```
 * ## Usage
 * ```javascript
 * import { split } from 'strman'
 * // OR
 * import split from 'strman.split'
 * ```
 * @param {String} value - The String!
 * @param {String} separator - Split separator.
 * @param {Number} limit - Split limit.
 * @example
 * split('strman', '')
 * // => ['s', 't', 'r', 'm', 'a', 'n']
 * @returns {String}  The String splited!
 */
export default (value: string, separator: string = '', limit?: number): Array<string> =>
  value.split(separator, limit || undefined)
