/**
 * Returns an array consisting of the characters in the string.
 * @param {String} value The input string
 * @returns {String[]} The array with the single characters of `value`
 * @playground
 * var strman = require('strman')
 *
 * let title = 'abc'
 * strman.chars(title) // returns ['a', 'b', 'c']
 */
export default value => value.split('')
