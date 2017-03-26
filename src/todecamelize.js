import toCamelCase from './tocamelcase'
import toLowerCase from './tolowercase'
/**
 * @module toDecamelize
 * @description
 * Decamelize String
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the toDecamelize function
 * ```sh
 * yarn add strman.todecamelize
 * ```
 * ## Usage
 * ```javascript
 * import { toDecamelize } from 'strman'
 * // OR
 * import toDecamelize from 'strman.todecamelize'
 * ```
 * @param {String} value - The String!
 * @example
 * const title = 'A Javascript string manipulation library.'
 * toDecamelize(title)
 * // => 'a_javascript_string_manipulation_library.'
  * @returns {String}  String decamelized.
 */
export default (value, chr = '_') => {
  const camel = toCamelCase(value)
  const string = camel.replace(/([A-Z])+/g, `${chr}$1`)
  return toLowerCase(string)
}
