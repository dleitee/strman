/**
 * Alias to slice method.
 * @playground
 * var slice = require('strman').slice;
 * let title = "strman";
 * let result = slice(title, 2, 5);
 * @param {String} value - The String!.
 * @param {Number} beginSlice - Start of slice.
 * @param {Number} endSlice - End of slice.
 * @return {String} - The String sliced!
 */
 export default (value, beginSlice, endSlice = undefined) => value.slice(beginSlice, endSlice)
