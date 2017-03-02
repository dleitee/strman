import pop from './lib/poparray'
import substr from './substr'
import split from './split'
import indexOf from './indexof'

/**
 * Returns array with strings between [start] and [end]
 * @param {String} value Input string
 * @param {String} start The start string to look for
 * @param {String} end The end string to look for
 * @return {String[]} An array with all the matches between a pair of `start` and `end`
 * @playground
 * var strman = require('strman')
 *
 * let title = '[abc][def]'
 * strman.between(title, '[', ']') // returns ['abc', 'def']
 */
export default (value, start, end) =>
    pop(split(value, end).map(text => substr(text, indexOf(text, start) + start.length)))
