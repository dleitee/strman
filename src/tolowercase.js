// @flow
/**
 * @module toLowerCase
 * @description
 * Transform to lowercase.
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the toLowerCase function
 * ```sh
 * yarn add strman.tolowercase
 * ```
 * ## Usage
 * ```javascript
 * import { toLowerCase } from 'strman'
 * // OR
 * import toLowerCase from 'strman.tolowercase'
 * ```
 * @param {String} value - The String!
 * @example
 * const title = 'A Javascript string manipulation library.'
 * toLowerCase(title)
 * // => 'a javascript string manipulation library.'
 * @returns {String}  String in lowercase.
 */
export default (value:string):string => value.toLowerCase()
