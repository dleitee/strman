import toLowerCase from './tolowercase'
/**
 * @module isLowerCase
 * @description
 * Verify if has lowerCase
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the isLowerCase function
 * ```sh
 * yarn add strman.islowercase
 * ```
 * ## Usage
 * ```javascript
 * import { isLowerCase } from 'strman'
 * // OR
 * import isLowerCase from 'strman.islowercase'
 * ```
 * @param {String} value - The String!
 * @playground
 * const title = 'A Javascript string manipulation library.'
 * isLowerCase(title)
 * // => false
 * @returns {Boolean}  String is lowercase?
 */
export default value => value === toLowerCase(value)
