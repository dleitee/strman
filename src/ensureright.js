// @flow
import endsWith from './endswith'
import append from './append'
/**
 * @module ensureRight
 * @description
 * Ensures that the [value] ends with [substr]. If it doesn't, it's appended.
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the ensureRight function
 * ```sh
 * yarn add strman.ensureright
 * ```
 * ## Usage
 * ```javascript
 * import { ensureRight } from 'strman'
 * // OR
 * import ensureRight from 'strman.ensureright'
 * ```
 * @param {String} value The input string
 * @param {String} substr The substr to be ensured to be right
 * @param {Boolean} [caseSensitive=true]
 * Use case (in-)sensitive matching for determining if `value` already ends with `substr`
 * @example
 * const value = 'Daniel'
 * const substr = ' Leite'
 * ensureRight(value, substr)
 * // => 'Daniel Leite'
 * @returns {String} The string which is guarenteed to start with `substr`
 */
export default (value:string, _substr:string, caseSensitive:boolean = true):string => {
  if (!endsWith(value, _substr, 0, caseSensitive)) {
    return append(value, _substr)
  }
  return value
}
