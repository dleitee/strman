import ascii from './lib/ascii';
import replace from './replace'

/**
 * Remove all non valid characters. Example: change á => a or ẽ => e.
 * @playground
 * var transliterate = require('strman').transliterate;
 * let title = "strmáñ";
 * let result = transliterate(title);
 * @param {String} value - The String!.
 * @return {String} - String without non valid characters.
 */
const transliterate = value => {
    for(let key in ascii){
        ascii[key].map((char) => value = replace(value, char, key));
    }
    return value;
};

export default transliterate;
