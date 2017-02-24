 /**
 * Verify if has lowerCase
 * @playground
 * var isLowerCase = require('strman').isLowerCase;
 * let title = "A Javascript string manipulation library.";
 * let result = isLowerCase(title);
 * @param {String} value - The String!.
 * @return {Boolean} - String is lowercase?.
 */
const isLowerCase = (value) => value === toLowerCase(value);

export {isLowerCase};
