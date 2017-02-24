import replace from './replace'

/**
 * Remove all spaces and replace for value.
 * @playground
 * var removeSpaces = require('strman').removeSpaces;
 * let title = "  s t r  m  a n     ";
 * let result = removeSpaces(title);
 * @param {String} value - The String!.
 * @param {String} replaced - Value to replace.
 * @return {String} - String without spaces.
 */
const removeSpaces = (value, replaced = '') => replace(value, '\\s+', replaced);

export default removeSpaces;
