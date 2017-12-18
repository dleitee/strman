// @flow
import replace from './replace'

/**
 * @module rightTrim
 * @description
 * Remove all spaces on right.
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the rightTrim function
 * ```sh
 * yarn add strman.righttrim
 * ```
 * ## Usage
 * ```javascript
 * import { rightTrim } from 'strman'
 * // OR
 * import rightTrim from 'strman.righttrim'
 * ```
 * @param {String} value The String!
 * @param {String} [char = ' '] if you need remove other char on right boarders.
 * @example
 * const title = 'strman     '
 * rightTrim(title)
 * // => 'strman'
 * @returns {String} String without right boarders spaces.
 */
export default (value: string, char: string = ' '): string => replace(value, `${char}+$`, '')
