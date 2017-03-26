import endsWith from './endswith'
import substr from './substr'
/**
 * @module removeSpaces
 * @description
 * Returns a new string with the 'suffix' removed, if present.
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the removeSpaces function
 * ```sh
 * yarn add strman.removespaces
 * ```
 * ## Usage
 * ```javascript
 * import { removeSpaces } from 'strman'
 * // OR
 * import removeSpaces from 'strman.removespaces'
 * ```
 * @param {String} value The String!
 * @param {String} suffix String to remove on right.
 * @param {Boolean} [caseSensitive = true] If you need to caseSensitive.
 * @example
 * const title = 'strman'
 * removeRight(title, 'man')
 * // => 'str'
 * @returns {String} The String without suffix!
 */
export default (value, suffix, caseSensitive = true) => {
  const length = value.length - suffix.length

  if (endsWith(value, suffix, null, caseSensitive)) {
    return substr(value, 0, length)
  }

  return value
}
