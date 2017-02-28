 /**
 * Returns a new string with the 'prefix' removed, if present.
 * @playground
 * var removeLeft = require('strman').removeLeft;
 * let title = "strman";
 * let result = removeLeft(title, 'str');
 * @param {String} value - The String!.
 * @param {String} prefix - String to remove on left.
 * @param {Boolean} caseSensitive - If you need to caseSensitive.
 * @return {String} - The String without prefix!
 */
const removeLeft = (value, prefix, caseSensitive = true) => {

    if(startsWith(value, prefix, 0, caseSensitive)){
        return substr(value, length(prefix));
    }

    return value;
};

export {removeLeft};