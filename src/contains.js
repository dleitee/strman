import indexOf from './indexof'
/**
 * Verifies that the needle is contained in value
 * @param {String} value The input string
 * @param {String} needle The string which is checked to be contained within `value`
 * @param {Boolean} [caseSensitive=true] Use case (in-)sensitive matching
 * @return {Boolean} True if `needle` is contained
 * @playground
 * var strman = require('strman')
 *
 * let title = 'Daniel Leite'
 * let needle = 'leite'
 * strman.contains(title, needle, false) // returns true
 */
export default (value, needle, caseSensitive = true) =>
  indexOf(value, needle, 0, caseSensitive) > -1
