import toCaseSensitive from './lib/case'
/**
 * @module inequal
 * @description
 * The indexOf() method returns the index within the calling String of the first occurrence
 * of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the inequal function
 * ```sh
 * yarn add strman.inequal
 * ```
 * ## Usage
 * ```javascript
 * import { inequal } from 'strman'
 * // OR
 * import inequal from 'strman.inequal'
 * ```
 * @param {String} value The String!
 * @param {String} needle Value to search.
 * @param {Number} [offset = 0] Offset to search.
 * @param {Boolean} [caseSensitive = true] if you use caseSensitive to test.
 * @example
 * indexOf('strman', 'man')
 * // => 3
 * @returns {Number} Return position of the first occurrence of 'needle'.
 */
export default (value, needle, offset = 0, caseSensitive = true) =>
    toCaseSensitive(value, caseSensitive).indexOf(toCaseSensitive(needle, caseSensitive), offset)
