// @flow
/**
 * @module repeat
 * @description
 * Returns a repeated string given a multiplier.
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the repeat function
 * ```sh
 * yarn add strman.repeat
 * ```
 * ## Usage
 * ```javascript
 * import { repeat } from 'strman'
 * // OR
 * import repeat from 'strman.repeat'
 * ```
 * @param {String} value - The String!
 * @param {Number} multiplier - Number of repeats.
 * @example
 * const title = 'strman'
 * repeat(title, 5)
 * // => 'strmanstrmanstrmanstrmanstrman'
 * @returns {String}  The String repeated!
 */
export default (value: string, multiplier: number): string => {
  let i = 0
  let result = ''
  while (multiplier > i) {
    result += value
    i += 1
  }
  return result
}
