/**
 * @module equal
 * @description
 * Tests if two strings are equal.
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the equal function
 * ```sh
 * yarn add strman.equal
 * ```
 * ## Usage
 * ```javascript
 * import { equal } from 'strman'
 * // OR
 * import equal from 'strman.equal'
 * ```
 * @param {String} stringA - String for the comparative
 * @param {String} stringB - String to be compared
 * @example
 * equal('foo', 'foo')
 * // => true
 * @returns {Boolean}  `stringA`is equal `stringB`
 */
export default (stringA, stringB) => stringA === stringB
