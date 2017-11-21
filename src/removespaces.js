// @flow
import replace from './replace'

/**
 * @module removeSpaces
 * @description
 * Remove all spaces and replace for value.
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the removeSpaces function
 * ```sh
 * yarn add strman.removespaces
 * ```
 * ## Usage
 * ```javascript
 * import { removeSpaces } from 'strman'
 * // OR
 * import removeSpaces from 'strman.removespaces'
 * ```
 * @param {String} value - The String!
 * @param {String} replaced - Value to replace.
 * @example
 * const title = '  s t r  m  a n     '
 * removeSpaces(title)
 * // => 'strman'
 * @returns {String}  String without spaces.
 */
export default (value:string, replaced:string = ''):string => replace(value, '\\s+', replaced)
