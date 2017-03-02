import endsWith from './endswith'
import append from './append'
/**
 * Ensures that the [value] ends with [substr]. If it doesn't, it's appended.
 * @param {String} value The input string
 * @param {String} substr The substr to be ensured to be right
 * @param {Boolean} [caseSensitive=true] Use case (in-)sensitive matching for determining if `value` already ends with `substr`
 * @return {String} The string which is guarenteed to start with `substr`
 * @playground
 * var strman = require('strman')
 *
 * let value = 'Daniel'
 * let substr = ' Leite'
 * strman.ensureRight(value, substr) // returns 'Daniel Leite'
 */
export default (value, _substr, caseSensitive = true) => {
  if (!endsWith(value, _substr, null, caseSensitive)) {
    return append(value, _substr)
  }
  return value
}
