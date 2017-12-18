// @flow
import pop from './lib/poparray'
import substr from './substr'
import split from './split'
import indexOf from './indexof'

/**
 * @module between
 * @description
 * Returns array with strings between `start` and `end`
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the between function
 * ```sh
 * yarn add strman.between
 * ```
 * ## Usage
 * ```javascript
 * import { between } from 'strman'
 * // OR
 * import between from 'strman.between'
 * ```
 * @param {String} value Input string
 * @param {String} start The start string to look for
 * @param {String} end The end string to look for
 * @example
 * strman.between('[abc][def]', '[', ']')
 * // => ['abc', 'def']
 * @returns {String[]} An array with all the matches between a pair of `start` and `end`
 */
export default (value: string, start: string, end: string): Array<string> =>
  pop(split(value, end).map(text => substr(text, indexOf(text, start) + start.length)))
