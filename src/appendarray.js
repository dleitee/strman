// @flow
/**
 * @module appendArray
 * @description
 * Append Array of Strings on Value
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the appendArray function
 * ```sh
 * yarn add strman.appendarray
 * ```
 * ## Usage
 * ```javascript
 * import { appendArray } from 'strman'
 * // OR
 * import appendArray from 'strman.appendarray'
 * ```
 * @param {String} value String initial
 * @param {String[]} append Array with strings to append
 * @example
 * appendArray('s', ['tr', 'm', 'an'])
 * // => 'strman'
 * @returns {String} The concatenated string
 */
export default (value: string, appends: Array<?string> = []): string => {
  if (appends.length === 0) {
    return value
  }
  return value + appends.join('')
}
