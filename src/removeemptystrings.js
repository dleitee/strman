/**
 * Remove empty strings from strings array.
 * @playground
 * var removeEmptyStrings = require('strman').removeEmptyStrings;
 * let titles = ["A Javascript string manipulation library.", null, undefined, '', ' '];
 * let result = removeEmptyStrings(titles);
 * @param {String[]} strings - Array of strings that will be cleaned.
 * @returns {String[]} - Array of strings without empty strings.
 */
export default strings => strings.filter(string => string && string !== '')
