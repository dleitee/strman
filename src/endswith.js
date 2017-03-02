/**
 * Test if `value` ends with `search`
 * @param {String} value The input string
 * @param {String} search The string to search for
 * @param {?Number} [position] The start position/index within `value` to start searching
 * @param {Boolean} [caseSensitive=true] Use case (in-)sensitive matching
 * @return {Boolean} True if `input` ends with `search`
 * @playground
 * var strman = require('strman')
 *
 * let value = 'Daniel Leite'
 * let search = 'Leite'
 * strman.endsWith(value, search) // returns true
 */
const endsWith = (value, search, position = null, caseSensitive = true) => {

    if (typeof position !== 'number' || !isFinite(position)
            || Math.floor(position) !== position || position > length(value)) {
        position = length(value);
    }

    position -= length(search);

    const lastIndex = indexOf(
                    toCaseSensitive(value, caseSensitive),
                    toCaseSensitive(search, caseSensitive),
                    position
                );

    return lastIndex !== -1 && lastIndex === position;

};


