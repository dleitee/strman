// @flow
import toUpperCase from './touppercase'
/**
 * @module toStudlyCaps
 * @description
 * Transform to StudlyCaps.
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the toStudlyCaps function
 * ```sh
 * yarn add strman.tostudlycaps
 * ```
 * ## Usage
 * ```javascript
 * import { toStudlyCaps } from 'strman'
 * // OR
 * import toStudlyCaps from 'strman.tostudlycaps'
 * ```
 * @param {String} value - The String!
 * @example
 * const title = 'A Javascript string manipulation library.'
 * toStudlyCaps(title)
 * // => 'AJavascriptStringManipulationLibrary.'
 * @returns {String} String in StudlyCaps.
 */
export default (value:string):string => {
  const string = value.replace(/[-_\s]+(.)?/g, (match, chr) => toUpperCase(chr))
  return toUpperCase(string.substr(0, 1)) + string.substr(1)
}
