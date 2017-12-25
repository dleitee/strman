// @flow
import startsWith from './startswith'
import append from './append'
/**
 * @module ensureLeft
 * @description
 * Ensures that the `value` begins with `substr`. If it doesn't, it's prepended.
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the ensureLeft function
 * ```sh
 * yarn add strman.ensureleft
 * ```
 * ## Usage
 * ```javascript
 * import { ensureLeft } from 'strman'
 * // OR
 * import ensureLeft from 'strman.ensureleft'
 * ```
 * @param {String} value The input string
 * @param {String} substr The substr to be ensured to be left
 * @param {Boolean} [caseSensitive=true]
 * Use case (in-)sensitive matching for determining if `value` already starts with `substr`
 * @example
 * const value = 'Leite'
 * const substr = 'Daniel '
 * ensureLeft(value, substr)
 * // => 'Daniel Leite'
 * @returns {String} The string which is guarenteed to start with `substr`
 */
export default (value: string, substr: string, caseSensitive: boolean = true): string => {
  if (!startsWith(value, substr, 0, caseSensitive)) {
    return append(substr, value)
  }

  return value
}
