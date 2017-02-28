/**
 * Append Array of Strings on Value
 * @param {String} value String initial
 * @param {String[]} append Array with strings to append
 * @return {String} The concatenated string
 * @playground
 * var strman = require('strman')
 *
 * let s = 's'
 * strman.appendArray(s, ['tr', 'm', 'an']) // returns 'strman'
 */
export default (value, appends = []) => {
  if (appends.length === 0) {
    return value
  }
  return value + appends.join('')
}
