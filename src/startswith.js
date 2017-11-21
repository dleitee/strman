// @flow
import substr from './substr'
import toCaseSensitive from './lib/case'
/**
 * @module startsWith
 * @description
 * Test if 'value' starts with 'search'
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the startsWith function
 * ```sh
 * yarn add strman.startswith
 * ```
 * ## Usage
 * ```javascript
 * import { startsWith } from 'strman'
 * // OR
 * import startsWith from 'strman.startswith'
 * ```
 * @param {String} value The String!
 * @param {String} search Value to search.
 * @param {Number} [position = 0] offset to search.
 * @param {Boolean} [caseSensitive = true] if you use caseSensitive to test.
 * @example
 * startsWith('strman', 'str')
 * // => true
 * @returns {Boolean}  If 'value' startsWith 'search' return true, else false.
 */
export default (value:string, search:string, position:number = 0, caseSensitive:boolean = true):boolean =>
  substr(
    toCaseSensitive(value, caseSensitive),
    position,
    search.length,
  ) === toCaseSensitive(search, caseSensitive)
