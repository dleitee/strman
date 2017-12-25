// @flow
import toStudlyCaps from './tostudlycaps'
import toLowerCase from './tolowercase'
/**
 * @module toCamelCase
 * @description
 * Transform to camelCase.
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the toCamelCase function
 * ```sh
 * yarn add strman.tocamelcase
 * ```
 * ## Usage
 * ```javascript
 * import { toCamelCase } from 'strman'
 * // OR
 * import toCamelCase from 'strman.tocamelcase'
 * ```
 * @param {String} value - The String!
 * @example
 * const title = 'A Javascript string manipulation library.'
 * toCamelCase(title)
 * // => 'aJavascriptStringManipulationLibrary'
 * @returns {String}  String in camelCase.
 */
export default (value: string): string => {
  const string = toStudlyCaps(value)
  return toLowerCase(string.substr(0, 1)) + string.substr(1)
}
