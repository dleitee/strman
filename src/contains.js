// @flow
import indexOf from './indexof'
/**
 * @module contains
 * @description
 * Verifies that the needle is contained in value
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the contains function
 * ```sh
 * yarn add strman.contains
 * ```
 * ## Usage
 * ```javascript
 * import { contains } from 'strman'
 * // OR
 * import contains from 'strman.contains'
 * ```
 * @param {String} value The input string
 * @param {String} needle The string which is checked to be contained within `value`
 * @param {Boolean} [caseSensitive=true] Use case (in-)sensitive matching
 * @example
 * const title = 'Daniel Leite'
 * const needle = 'leite'
 * contains(title, needle, false)
 * // => true
 * @returns {Boolean} True if `needle` is contained
 */
export default (value:string, needle:string, caseSensitive:boolean = true):boolean =>
  indexOf(value, needle, 0, caseSensitive) > -1
