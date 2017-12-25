// @flow
/**
 * @module isString
 * @description
 * Checks whether a string.
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the isString function
 * ```sh
 * yarn add strman.isstring
 * ```
 * ## Usage
 * ```javascript
 * import { isString } from 'strman'
 * // OR
 * import isString from 'strman.isstring'
 * ```
 * @param {String} value The String!
 * @example
 * const title = 'A Javascript string manipulation library.'
 * isString(title)
 * // => true
 * @returns {Boolean} if 'value' isString, return true, else false.
 */
export default (value: string): boolean =>
  Object.prototype.toString.call(value) === '[object String]'
