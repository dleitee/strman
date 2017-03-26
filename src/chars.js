/**
 * @module chars
 * @description
 * Returns an array consisting of the characters in the string.
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the chars function
 * ```sh
 * yarn add strman.chars
 * ```
 * ## Usage
 * ```javascript
 * import { chars } from 'strman'
 * // OR
 * import chars from 'strman.chars'
 * ```
 * @param {String} value The input string
 * @example
 * chars('abc')
 * // => ['a', 'b', 'c']
 * @returns {String[]} The array with the single characters of `value`
 */
export default value => value.split('')
