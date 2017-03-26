/**
 * @module substr
 * @description
 * Alias to substr function.
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the substr function
 * ```sh
 * yarn add strman.substr
 * ```
 * ## Usage
 * ```javascript
 * import { substr } from 'strman'
 * // OR
 * import substr from 'strman.substr'
 * ```
 * @param {String} value - The String!
 * @param {Number} start - Substring starts.
 * @param {Number} length - Substring length.
 * @example
 * substr('strman', 0, 3)
 * // => 'strm'
 * @returns {String} The Substring!
 */
export default (value, start, length = undefined) => value.substr(start, length)
