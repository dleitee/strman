// @flow
import leftTrim from './lefttrim'
import rightTrim from './righttrim'

/**
 * @module trim
 * @description
 * Remove all spaces on left and right.
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the trim function
 * ```sh
 * yarn add strman.trim
 * ```
 * ## Usage
 * ```javascript
 * import { trim } from 'strman'
 * // OR
 * import trim from 'strman.trim'
 * ```
 * @param {String} value - String to remove spaces.
 * @param {String} [char = ' '] - if you need remove other char on boarders.
 * @example
 * const title = '   strman   '
 * trim(title)
 * // => 'strman'
 * @returns {String} String without boarders spaces.
 */
export default (value: string, char: string = ' '): string => leftTrim(rightTrim(value, char), char)
