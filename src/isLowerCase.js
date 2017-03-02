import toLowerCase from './tolowercase'
/**
 * Verify if has lowerCase
 * @playground
 * var isLowerCase = require('strman').isLowerCase;
 * let title = "A Javascript string manipulation library.";
 * let result = isLowerCase(title);
 * @param {String} value - The String!.
 * @return {Boolean} - String is lowercase?.
 */
export default value => value === toLowerCase(value)
