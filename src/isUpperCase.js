import toUpperCase from './touppercase'
 /**
 * Verify if has UPPERCASE
 * @playground
 * var isUpperCase = require('strman').isUpperCase;
 * let title = "A Javascript string manipulation library.";
 * let result = isUpperCase(title);
 * @param {String} value - The String!.
 * @return {Boolean} - String is UPPERCASE?.
 */
export default value => value === toUpperCase(value)
