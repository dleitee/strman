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

const isInteger = value =>
  typeof value === 'number' && isFinite(value) && Math.floor(value) === value

const getPosition = (value, search, position) => {
  if (!isInteger(position) || position > value.length) {
    return value.length - search.length
  }
  return position - search.length
}

export default (value, search, position = null, caseSensitive = true) => {
  const newPosition = getPosition(value, search, position)
  const lastIndex = indexOf(
    toCaseSensitive(value, caseSensitive),
    toCaseSensitive(search, caseSensitive),
    newPosition,
  )
  return lastIndex !== -1 && lastIndex === newPosition
}
