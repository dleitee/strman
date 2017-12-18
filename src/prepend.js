// @flow
import prependArray from './prependarray'
/**
 * @module prepend
 * @description
 * Returns a new string starting with 'prepends'.
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the prepend function
 * ```sh
 * yarn add strman.prepend
 * ```
 * ## Usage
 * ```javascript
 * import { prepend } from 'strman'
 * // OR
 * import prepend from 'strman.prepend'
 * ```
 * @param {String} value - The String!
 * @param {...String} prepends - Strings to prepend.
 * @example
 * const title = 'strman'
 * prepend(title, '_')
 * // => '_strman'
 * @returns {String}  The String prepended!
 */
export default (value: string, ...prepends: Array<string>): string => prependArray(value, prepends)
