import trim from './trim'
import replace from './replace'
/**
 * @module collapseWhitespace
 * @description
 * Replaces consecutive whitespace characters with a single space.
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the collapseWhitespace function
 * ```sh
 * yarn add strman.collapsewhitespace
 * ```
 * ## Usage
 * ```javascript
 * import { collapseWhitespace } from 'strman'
 * // OR
 * import collapseWhitespace from 'strman.collapsewhitespace'
 * ```
 * @param {String} value The input string
 * @example
 * collapseWhitespace('  a  b  c  ')
 * // => 'a b c'
 * @returns {String} The whitespace collapsed string
 */
export default value => trim(replace(value, '\\s\\s+', ' '))
