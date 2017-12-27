// @flow
import endsWith from './endswith'
import substr from './substr'
/**
 * @module removeRight
 * @description
 * Returns a new string with the 'suffix' removed, if present.
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the removeRight function
 * ```sh
 * yarn add strman.removeRight
 * ```
 * ## Usage
 * ```javascript
 * import { removeRight } from 'strman'
 * // OR
 * import removeRight from 'strman.removeRight'
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
export default (value: string, suffix: string, caseSensitive: boolean = true): string => {
  const length = value.length - suffix.length

  if (endsWith(value, suffix, undefined, caseSensitive)) {
    return substr(value, 0, length)
  }

  return value
}
