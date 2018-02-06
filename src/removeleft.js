// @flow
import startsWith from './startswith'
import substr from './substr'
/**
 * @module removeLeft
 * @description
 * Returns a new string with the 'prefix' removed, if present.
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the removeLeft function
 * ```sh
 * yarn add strman.removeleft
 * ```
 * ## Usage
 * ```javascript
 * import { removeLeft } from 'strman'
 * // OR
 * import removeLeft from 'strman.removeleft'
 * ```
 * @param {String} value The String!
 * @param {String} prefix String to remove on left.
 * @param {Boolean} [caseSensitive = true] If you need to caseSensitive.
 * @example
 * const title = 'strman'
 * removeLeft(title, 'str')
 * // => 'man'
 * @returns {String} The String without prefix!
 */
export default (value: string, prefix: string, caseSensitive: boolean = true): string => {
  if (startsWith(value, prefix, 0, caseSensitive)) {
    return substr(value, prefix.length, value.length - prefix.length)
  }
  return value
}
