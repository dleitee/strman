/**
 * @module prependArray
 * @description
 * Returns a new string starting with 'prepends'.
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the prependArray function
 * ```sh
 * yarn add strman.prependarray
 * ```
 * ## Usage
 * ```javascript
 * import { prependArray } from 'strman'
 * // OR
 * import prependArray from 'strman.prependarray'
 * ```
 * @param {String} value The String!
 * @param {String[]} prepends Strings to prepend.
 * @example
 * const title = 'strman'
 * prependArray(title, ['_'])
 * // => '_strman'
 * @returns {String} The String prepended!
 */
export default (value, prepends = []) => {
  if (prepends.length === 0) {
    return value
  }
  return prepends.join('') + value
}
