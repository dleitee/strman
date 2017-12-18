// @flow
import indexOf from './indexof'
import getCase from './lib/case'

const countSubstr = (
  value: string,
  substr: string,
  allowOverlapping: boolean = false,
  position: number = 0,
  count: number = 0,
): number => {
  let currentPosition = indexOf(value, substr, position)
  if (currentPosition === -1) {
    return count
  }
  if (!allowOverlapping) {
    currentPosition += substr.length - 1
  }
  return countSubstr(value, substr, allowOverlapping, currentPosition + 1, count + 1)
}

/**
 * @module countSubstr
 * @description
 * Count the number of times substr appears in value
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the countSubstr function
 * ```sh
 * yarn add strman.countsubstr
 * ```
 * ## Usage
 * ```javascript
 * import { countSubstr } from 'strman'
 * // OR
 * import countSubstr from 'strman.countsubstr'
 * ```
 * @param {String} value The input string
 * @param {String} substr The substring to look for
 * @param {Boolean} [caseSensitive=true] Use case (in-)sensitive matching
 * @param {Boolean} [allowOverlapping=false] Allow overlapping substrings to be counted
 * @example
 * const title = 'Daniel Leite'
 * const substr = 'Leite'
 * countSubstr(title, substr)
 * // => 1
 * @returns {Number} The number of matches
 */
export default (
  value: string,
  substr: string,
  caseSensitive: boolean = true,
  allowOverlapping: boolean = false,
): number =>
  countSubstr(getCase(value, caseSensitive), getCase(substr, caseSensitive), allowOverlapping)
