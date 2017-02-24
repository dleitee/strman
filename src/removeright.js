/**
 * Returns a new string with the 'suffix' removed, if present.
 * @playground
 * var removeRight = require('strman').removeRight;
 * let title = "strman";
 * let result = removeRight(title, 'man');
 * @param {String} value - The String!.
 * @param {String} suffix - String to remove on right.
 * @param {Boolean} caseSensitive - If you need to caseSensitive.
 * @return {String} - The String without suffix!
 */
const removeRight = (value, suffix, caseSensitive = true) => {
    let _length = length(value) - length(suffix);

    if(endsWith(value, suffix, null, caseSensitive)){
        return substr(value, 0, _length);
    }

    return value;
};

export {removeRight};
