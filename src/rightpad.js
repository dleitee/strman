import substr from './substr'
import append from './append'
import repeat from './repeat'
/**
 * Returns a new string of a given length such that the ending of the string is padded.
 * @playground
 * var rightPad = require('strman').rightPad;
 * let title = "strman";
 * let result = rightPad(title, 10, 0);
 * @param {String} value - The String!.
 * @param {Number} _length - Max length of String.
 * @param {Char} char - Char to repeat.
 * @return {String} - String pad.
 */
export default (value, _length, char = ' ') => {

    let result = value;
    char = String(char);

    if(char.length > 1){
        char = substr(char, 0, 1);
    }

    _length = _length - value.length;

    result = append(result, repeat(char, _length));

    return result;
};


