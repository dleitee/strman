/**
 * Returns a new string of a given length such that the beginning of the string is padded.
 * @playground
 * var leftPad = require('strman').leftPad;
 * let title = "strman";
 * let result = leftPad(title, 10, 0);
 * @param {String} value - The String!.
 * @param {Number} _length - Max length of String.
 * @param {Char} char - Char to repeat.
 * @return {String} - String pad.
 */
 const leftPad = (value, _length, char = ' ') => {

    let result = value;
    char = String(char);

    if(length(char) > 1){
        char = substr(char, 0, 1);
    }

    _length = _length - length(value);

    result = append(repeat(char, _length), result);

    return result;
};

export {leftPad};
