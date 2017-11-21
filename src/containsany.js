// @flow
import contains from './contains'

const containsAny = (value:string, caseSensitive:boolean, previous:boolean, current:string):boolean => {
  if (contains(value, current, caseSensitive)) {
    return true
  }
  return previous
}

/**
 * @module containsAny
 * @description
 * Verifies that one or more of needles are contained in value
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the containsAny function
 * ```sh
 * yarn add strman.containsany
 * ```
 * ## Usage
 * ```javascript
 * import { containsAny } from 'strman'
 * // OR
 * import containsAny from 'strman.containsany'
 * ```
 * @param {String} value The input string
 * @param {String[]} needles An array of string which are checked to be contained within `value`
 * @param {Boolean} [caseSensitive=true] Use case (in-)sensitive matching
 * @example
 * const title = 'Daniel Leite'
 * const needles = ['Leite', 'Oliveira']
 * containsAny(title, needles)
 * // => true
 * @returns {Boolean} True if at least one of `needles` is contained
 */
export default (value:string, needles:Array<string>, caseSensitive:boolean = true):boolean =>
  needles.reduce(containsAny.bind(this, value, caseSensitive), false)
