// @flow
import toUpperCase from './touppercase'
/**
 * @module isUpperCase
 * @description
 * Verify if has UPPERCASE
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the isUpperCase function
 * ```sh
 * yarn add strman.isuppercase
 * ```
 * ## Usage
 * ```javascript
 * import { isUpperCase } from 'strman'
 * // OR
 * import isUpperCase from 'strman.isuppercase'
 * ```
 * @param {String} value The String!
 * @example
 * const title = 'A Javascript string manipulation library.'
 * isUpperCase(title)
 * // => false
 * @returns {Boolean} String is UPPERCASE?.
 */
export default (value:string):boolean => value === toUpperCase(value)
