import { _pop } from './lib/array';
import substr from './substr'

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
const between = (value, start, end) =>
    _pop(split(value, end).map((text) => substr(text, indexOf(text, start)+start.length)));

export default between;
