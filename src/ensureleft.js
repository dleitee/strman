import startsWith from './startswith'
import append from './append'
/**
 * Ensures that the `value` begins with `substr`. If it doesn't, it's prepended.
 * @param {String} value The input string
 * @param {String} substr The substr to be ensured to be left
 * @param {Boolean} [caseSensitive=true] Use case (in-)sensitive matching for determining if
 * `value` already starts with `substr`
 * @return {String} The string which is guarenteed to start with `substr`
 * @playground
 * var strman = require('strman')
 *
 * let value = 'Leite'
 * let substr = 'Daniel '
 * strman.ensureLeft(value, substr) // returns 'Daniel Leite'
 */
export default (value, substr, caseSensitive = true) => {
  if (!startsWith(value, substr, 0, caseSensitive)) {
    return append(substr, value)
  }

  return value
}
