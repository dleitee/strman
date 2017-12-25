// @flow
/**
 * @module inequal
 * @description
 * Tests if two strings are inequal.
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the inequal function
 * ```sh
 * yarn add strman.inequal
 * ```
 * ## Usage
 * ```javascript
 * import { inequal } from 'strman'
 * // OR
 * import inequal from 'strman.inequal'
 * ```
 * @param {String} stringA - String for the comparative
 * @param {String} stringB - String to be compared
 * @example
 * inequal('foo', 'foo')
 * // => false
 * @returns {Boolean}  [stringA] is inequal [stringB]
 */
export default (stringA: string, stringB: string): boolean => stringA !== stringB
