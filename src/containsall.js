import contains from './contains'
/**
 * Verifies that all needles are contained in value
 * @param {String} value The input string
 * @param {String[]} needles An array of strings which are checked to be contained within `value`
 * @param {Boolean} [caseSensitive=true] Use case (in-)sensitive matching
 * @return {Boolean} True if all `needles` are contained
 * @playground
 * var strman = require('strman')
 *
 * let title = 'Daniel Leite'
 * let needles = ['Leite', 'Daniel']
 * strman.containsAll(title, needles) // returns true
 */
const containsAll = (value, caseSensitive, previous, current) => {
  if (!contains(value, current, caseSensitive)) {
    return false
  }
  return previous && true
}

export default (value, needles, caseSensitive = true) => {
  if (needles.length > 0) {
    return needles.reduce(containsAll.bind(this, value, caseSensitive), true)
  }

  return false
}
