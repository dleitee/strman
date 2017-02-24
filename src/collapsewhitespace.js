
/**
 * Replaces consecutive whitespace characters with a single space
 * @param {String} value The input string
 * @return {String} The whitespace collapsed string
 * @playground
 * var strman = require('strman')
 *
 * let title = '  a  b  c  '
 * strman.collapseWhitespace(title) // returns 'a b c'
 */
const collapseWhitespace = value => trim(replace(value, '\\s\\s+',' '));

export {collapseWhitespace};
