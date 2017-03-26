import substr from './substr'

/**
 * @module at
 * @description
 * Get the character at index
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the at function
 * ```sh
 * yarn add strman.at
 * ```
 * ## Usage
 * ```javascript
 * import { at } from 'strman'
 * // OR
 * import at from 'strman.at'
 * ```
 * @param {String} value The input string
 * @param {Number} index The index for which to extract the character
 * @example
 * at('abc', 1)
 * // => 'b'
 * @returns {String} The character at position index
 */
export default (value, index) => substr(value, index, 1)
