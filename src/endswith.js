import toCaseSensitive from './lib/case'
import indexOf from './indexof'
/**
 * Test if `value` ends with `search`
 * @param {String} value The input string
 * @param {String} search The string to search for
 * @param {?Number} [position] The start position/index within `value` to start searching
 * @param {Boolean} [caseSensitive=true] Use case (in-)sensitive matching
 * @return {Boolean} True if `input` ends with `search`
 * @playground
 * var strman = require('strman')
 *
 * let value = 'Daniel Leite'
 * let search = 'Leite'
 * strman.endsWith(value, search) // returns true
 */
export default (value, search, position = null, caseSensitive = true) => {
  if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > value.length) {
    position = value.length
  }

  position -= search.length

  const lastIndex = indexOf(
    toCaseSensitive(value, caseSensitive),
    toCaseSensitive(search, caseSensitive),
    position
  )

  return lastIndex !== -1 && lastIndex === position
}
