/**
 * @module toUpperCase
 * @description
 * Transform to uppercase.
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the toUpperCase function
 * ```sh
 * yarn add strman.touppercase
 * ```
 * ## Usage
 * ```javascript
 * import { toUpperCase } from 'strman'
 * // OR
 * import toUpperCase from 'strman.touppercase'
 * ```
 * @param {String} value - The String!
 * @example
 * const title = 'A Javascript string manipulation library.'
 * toUpperCase(title)
 * // => 'A JAVASCRIPT STRING MANIPULATION LIBRARY.'
 * @returns {String}  String in uppercase.
 */
export default value => value.toUpperCase()
