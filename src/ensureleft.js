/**
 * Ensures that the `value` begins with `substr`. If it doesn't, it's prepended.
 * @param {String} value The input string
 * @param {String} substr The substr to be ensured to be left
 * @param {Boolean} [caseSensitive=true] Use case (in-)sensitive matching for determining if `value` already starts with `substr`
 * @return {String} The string which is guarenteed to start with `substr`
 * @playground
 * var strman = require('strman')
 *
 * let value = 'Leite'
 * let substr = 'Daniel '
 * strman.ensureLeft(value, substr) // returns 'Daniel Leite'
 */
const ensureLeft = (value, _substr, caseSensitive = true)  => {
    if(!startsWith(value, _substr, 0, caseSensitive)){
        return append(_substr, value);
    }

    return value;
};

export  {ensureLeft};
