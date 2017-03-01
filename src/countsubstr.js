import indexOf from './indexof'
import getCase from './lib/case'
/**
 * Polyfill to countSubstr function
 * @private
 * @param value,
 * @param substr,
 * @param position = 0,
 * @param count = 0,
 * @param allowOverlapping = false
 * @return integer
 */
const countSubstring = (value, substr, allowOverlapping = false, position = 0, count = 0) => {
  let currentPosition = indexOf(value, substr, position)
  if (currentPosition === -1) {
    return count
  }
  if (!allowOverlapping) {
    currentPosition += substr.length - 1
  }
  return countSubstring(value, substr, allowOverlapping, currentPosition + 1, count + 1)
}

/**
 * Count the number of times substr appears in value
 * @param {String} value The input string
 * @param {String} substr The substring to look for
 * @param {Boolean} [caseSensitive=true] Use case (in-)sensitive matching
 * @param {Boolean} [allowOverlapping=false] Allow overlapping substrings to be counted
 * @return {Number} The number of matches
 * @playground
 * var strman = require('strman')
 *
 * let title = 'Daniel Leite'
 * let substr = 'Leite'
 * strman.counSubstr(title, substr) // returns 1
 */
export default (value, substr, caseSensitive = true, allowOverlapping = false) =>
  countSubstring(getCase(value, caseSensitive), getCase(substr, caseSensitive), allowOverlapping)
