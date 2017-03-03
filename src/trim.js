import leftTrim from './lefttrim'
import rightTrim from './righttrim'

/**
 * Remove all spaces on left and right.
 * @playground
 * var trim = require('strman').trim;
 * let title = "   strman   ";
 * let result = trim(title);
 * @params {String} value - String to remove spaces.
 * @params {String = ' '} char - if you need remove other char on boarders.
 * @return {String} - String without boarders spaces.
 */
export default (value, char = ' ') => leftTrim(rightTrim(value, char), char)
