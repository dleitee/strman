import replace from './replace'
/**
 * @module leftTrim
 * @description
 * Remove all spaces on left.
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the leftTrim function
 * ```sh
 * yarn add strman.lefttrim
 * ```
 * ## Usage
 * ```javascript
 * import { leftTrim } from 'strman'
 * // OR
 * import leftTrim from 'strman.lefttrim'
 * ```
 * @param {String} value The String!
 * @param {String} [char = ''] if you need remove other char on left boarders.
 * @example
 * const title = '   strman'
 * leftTrim(title)
 * // => 'strman'
 * @returns {String} String without left boarders spaces.
 */
export default (value, char = ' ') => replace(value, `^${char}+`, '')
