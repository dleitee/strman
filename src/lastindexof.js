import toCaseSensitive from './lib/case'
/**
 * @module lastIndexOf
 * @description
 * The lastIndexOf() method returns the index within the calling String object of the last
 * occurrence of the specified value, searching backwards from fromIndex. Returns -1 if the
 * value is not found.
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the lastIndexOf function
 * ```sh
 * yarn add strman.lastindexof
 * ```
 * ## Usage
 * ```javascript
 * import { lastIndexOf } from 'strman'
 * // OR
 * import lastIndexOf from 'strman.lastindexof'
 * ```
 * @param {String} value The String!
 * @param {String} needle Value to search.
 * @param {Number} [offset = undefined] Offset to search.
 * @param {Boolean} [caseSensitive = true] if you use caseSensitive to test.
 * @example
 * const title = 'strman strman'
 * result = lastIndexOf(title, 'str')
 * // => 7
 * @returns {Number} Return position of the last occurrence of 'needle'.
 */
export default (value, needle, offset = undefined, caseSensitive = true) =>
toCaseSensitive(value, caseSensitive).lastIndexOf(
  toCaseSensitive(needle, caseSensitive),
  offset,
)
