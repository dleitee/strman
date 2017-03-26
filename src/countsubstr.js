import indexOf from './indexof'
import getCase from './lib/case'

const countSubstr = (value, substr, allowOverlapping = false, position = 0, count = 0) => {
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
export default (value, substr, caseSensitive = true, allowOverlapping = false) =>
  countSubstr(getCase(value, caseSensitive), getCase(substr, caseSensitive), allowOverlapping)
