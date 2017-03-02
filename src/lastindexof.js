/**
 * The lastIndexOf() method returns the index within the calling String object of the last
 * occurrence of the specified value, searching backwards from fromIndex. Returns -1 if the
 * value is not found.
 * @playground
 * var lastIndexOf = require('strman').lastIndexOf;
 * let title = "strman strman";
 * let result = lastIndexOf(title, 'str');
 * @param {String} value - The String!.
 * @param {String} needle - Value to search.
 * @param {Number} offset - Offset to search.
 * @param {Boolean} caseSensitive - if you use caseSensitive to test.
 * @return {Number} - Return position of the last occurrence of 'needle'.
 */
const lastIndexOf = (value, needle, offset = undefined, caseSensitive = true) =>
    toCaseSensitive(value, caseSensitive).lastIndexOf(
            toCaseSensitive(needle, caseSensitive),
            offset
        );


