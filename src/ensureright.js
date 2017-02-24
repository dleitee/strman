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
const ensureRight = (value, _substr, caseSensitive = true)  =>
    !endsWith(value, _substr, null, caseSensitive)?append(value, _substr):value;

export {ensureRight};
