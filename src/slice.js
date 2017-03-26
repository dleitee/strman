/**
 * @module slugify
 * @description
 * Alias to slice method.
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the slugify function
 * ```sh
 * yarn add strman.slugify
 * ```
 * ## Usage
 * ```javascript
 * import { slugify } from 'strman'
 * // OR
 * import slugify from 'strman.slugify'
 * ```
 * @param {String} value The String!
 * @param {Number} beginSlice Start of slice.
 * @param {Number} endSlice End of slice.
 * @example
 * const title = 'strman'
 * slice(title, 2, 5)
 * // => 'rma'
 * @returns {String} The String sliced!
 */
 export default (value, beginSlice, endSlice = undefined) => value.slice(beginSlice, endSlice)
