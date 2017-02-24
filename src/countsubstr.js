/**
 * Polyfill to countSubstr function
 * @private
 * @param value,
 * @param substr,
 * @param position = 0,
 * @param count = 0,
 * @param allowOverlapping = false
 * @return integer
 */
const _countSubstring = (value, _substr, allowOverlapping = false, position = 0, count = 0) => {

    let _position = indexOf(value, _substr, position);

    if(_position === -1){
        return count;
    }

    if(!allowOverlapping){
        _position = _position + length(_substr) - 1;
    }

    return _countSubstring(value, _substr, allowOverlapping, _position + 1, count + 1);

};

/**
 * Count the number of times substr appears in value
 * @param {String} value The input string
 * @param {String} substr The substring to look for
 * @param {Boolean} [caseSensitive=true] Use case (in-)sensitive matching
 * @param {Boolean} [allowOverlapping=false] Allow overlapping substrings to be counted
 * @return {Number} The number of matches
 * @playground
 * var strman = require('strman')
 *
 * let title = 'Daniel Leite'
 * let substr = 'Leite'
 * strman.counSubstr(title, substr) // returns 1
 */
const countSubstr = (value, _substr, caseSensitive = true, allowOverlapping = false) =>
    _countSubstring(
        toCaseSensitive(value, caseSensitive),
        toCaseSensitive(_substr, caseSensitive),
        allowOverlapping
    );

export {countSubstr};
