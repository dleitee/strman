/**
 * The indexOf() method returns the index within the calling String of the first occurrence
 * of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
 * @playground
 * var indexOf = require('strman').indexOf;
 * let title = "strman";
 * let result = indexOf(title, 'man');
 * @param {String} value - The String!.
 * @param {String} needle - Value to search.
 * @param {Number} offset - Offset to search.
 * @param {Boolean} caseSensitive - if you use caseSensitive to test.
 * @return {Number} - Return position of the first occurrence of 'needle'.
 */
const indexOf = (value, needle, offset = 0, caseSensitive = true) =>
    toCaseSensitive(value, caseSensitive).indexOf(toCaseSensitive(needle, caseSensitive), offset);

export {indexOf};
