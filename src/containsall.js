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
const containsAll = (value, needles, caseSensitive = true) =>
    length(needles) > 0?needles.reduce((previous, current) =>
        !contains(value, current, caseSensitive)?false:previous && true
        , true):false;

export {containsAll};
