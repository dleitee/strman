import replace from './replace';

/**
 * Remove all spaces on right.
 * @playground
 * var rightTrim = require('strman').rightTrim;
 * let title = "strman     ";
 * let result = rightTrim(title);
 * @param {String} value - The String!.
 * @params {String = ' '} char - if you need remove other char on right boarders.
 * @return {String} - String without right boarders spaces.
 */
const rightTrim = (value, char = ' ') => replace(value, `${char}+$`, '');

 export default rightTrim;
