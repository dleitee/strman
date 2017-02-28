import substr from './substr'

/**
 * Get the character at index
 * @param {String} value The input string
 * @param {Number} index The index for which to extract the character
 * @return {String} The character at position index
 * @playground
 * var strman = require('strman')
 *
 * let title = 'abc'
 * strman.at(title, 1) // returns 'b'
 */
export default (value, index) => substr(value, index, 1)
