/**
 * Test if 'value' starts with 'search'
 * @playground
 * var startsWith = require('strman').startsWith;
 * let title = "strman";
 * let result = startsWith(title, 'str');
 * @param {String} value - The String!.
 * @param {String} search - Value to search.
 * @param {Number} position - offset to search.
 * @param {Boolean} caseSensitive - if you use caseSensitive to test.
 * @return {Boolean} - If 'value' startsWith 'search' return true, else false.
 */
const startsWith = (value, search, position = 0, caseSensitive = true) =>
    substr(
        toCaseSensitive(value, caseSensitive),
        position,
        length(search)
    ) === toCaseSensitive(search, caseSensitive);

export {startsWith};
