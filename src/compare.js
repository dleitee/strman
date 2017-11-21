// @flow
import equal from './equal'

/**
 * @module compare
 * @description
 * Compares two strings to each other. If they are equivalent, a zero is returned. Otherwise,
 * most of these routines will return a positive or negative result corresponding to whether stringA
 * is lexicographically greater than, or less than, respectively, than stringB.
 *
 * if `stringA` > `stringB` return 1
 *
 * if `stringA` < `stringB` return -1
 *
 * if `stringA` = `stringB` return 0
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the compare function
 * ```sh
 * yarn add strman.compare
 * ```
 * ## Usage
 * ```javascript
 * import { compare } from 'strman'
 * // OR
 * import compare from 'strman.compare'
 * ```
 * @param {String} stringA - String for the comparative
 * @param {String} stringB - String to be compared
 * @example
 * compare('foo', 'bar')
 * // => 1
 * @returns {Number}
 */
export default (stringA:string, stringB:string):number => {
  if (equal(stringA, stringB)) {
    return 0
  }
  return stringA > stringB ? 1 : -1
}
