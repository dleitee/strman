import replace from './replace'

/**
 * Remove all spaces on left.
 * @playground
 * var leftTrim = require('strman').leftTrim;
 * let title = "   strman";
 * let result = leftTrim(title);
 * @param {String} value - The String!.
 * @params {String = ' '} char - if you need remove other char on left boarders.
 * @return {String} - String without left boarders spaces.
 */
export default (value, char = ' ') => replace(value, `^${char}+`, '')
