 /**
 * Returns a new string starting with 'prepends'.
 * @playground
 * var prepend = require('strman').prepend;
 * let title = "strman";
 * let result = prepend(title, '_');
 * @param {String} value - The String!.
 * @param {...String} prepends - Strings to prepend.
 * @return {String} - The String prepended!
 */
const prepend = (value, ...prepends) => prependArray(value, prepends);

export {prepend};
