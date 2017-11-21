// @flow
import appendArray from './appendarray'

/**
 * @module append
 * @description
 * Append Strings on Value with spreaded arguments
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the append function
 * ```sh
 * yarn add strman.append
 * ```
 * ## Usage
 * ```javascript
 * import { append } from 'strman'
 * // OR
 * import append from 'strman.append'
 * ```
 * @param {String} value Initial value
 * @param {String} appends Spreaded array with strings to append
 * @example
 * append('s', 'tr', 'm', 'an')
 * // => 'strman'
 * @returns {String} The concatenated string
 */
export default (value:string, ...appends: Array<?string>):string => appendArray(value, appends)
