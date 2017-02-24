 /**
 * Returns a new string starting with 'prepends'.
 * @playground
 * var prependArray = require('strman').prependArray;
 * let title = "strman";
 * let result = prependArray(title, '_');
 * @param {String} value - The String!.
 * @param {String[]} prepends - Strings to prepend.
 * @return {String} - The String prepended!
 */
const prependArray = (value, prepends = []) => {

    if(length(prepends) === 0){
        return value;
    }

    return prepends.join('') + value;
};

export {prependArray};
