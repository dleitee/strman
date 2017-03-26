/**
 * @module removeEmptyStrings
 * @description
 * Remove empty strings from strings array.
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the removeEmptyStrings function
 * ```sh
 * yarn add strman.removeemptystrings
 * ```
 * ## Usage
 * ```javascript
 * import { removeEmptyStrings } from 'strman'
 * // OR
 * import removeEmptyStrings from 'strman.removeemptystrings'
 * ```
 * @param {String[]} strings - Array of strings that will be cleaned.
 * @example
 * const titles = ['A Javascript string manipulation library.', null, undefined, '', ' ']
 * removeEmptyStrings(titles)
 * // => ['A Javascript string manipulation library.']
 * @returns {String[]}  Array of strings without empty strings.
 */
export default strings => strings.filter(string => string && string !== '')
