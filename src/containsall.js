// @flow
import contains from './contains'

const containsAll = (
  value: string,
  caseSensitive: boolean,
  previous: boolean,
  current: string
): boolean => {
  if (!contains(value, current, caseSensitive)) {
    return false
  }
  return previous && true
}

/**
 * @module containsAll
 * @description
 * Verifies that all needles are contained in value
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the containsAll function
 * ```sh
 * yarn add strman.containsall
 * ```
 * ## Usage
 * ```javascript
 * import { containsAll } from 'strman'
 * // OR
 * import containsAll from 'strman.containsall'
 * ```
 * @param {String} value The input string
 * @param {String[]} needles An array of strings which are checked to be contained within `value`
 * @param {Boolean} [caseSensitive=true] Use case (in-)sensitive matching
 * @example
 * const title = 'Daniel Leite'
 * const needles = ['Leite', 'Daniel']
 * containsAll(title, needles)
 * // => true
 * @returns {Boolean} True if all `needles` are contained
 */
export default (value: string, needles: Array<string>, caseSensitive: boolean = true): boolean => {
  if (needles.length > 0) {
    return needles.reduce(containsAll.bind(this, value, caseSensitive), true)
  }

  return false
}
