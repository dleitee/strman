// @flow
import replace from './replace'

/**
 * @module format
 * @description
 * Formats a string using parameters.
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the format function
 * ```sh
 * yarn add strman.format
 * ```
 * ## Usage
 * ```javascript
 * import { format } from 'strman'
 * // OR
 * import format from 'strman.format'
 * ```
 * @param {String} value - Value that will be formatted.
 * @param {String[]} params - Array with the parameters described in the string.
 * @example
 * const select = `SELECT * FROM CONTACTS WHERE NAME LIKE '%{0}%' AND EMAIL LIKE '%{1}%'`
 * format(select, 'DANIEL', 'GMAIL')
 * // => `SELECT * FROM CONTACTS WHERE NAME LIKE '%DANIEL%' AND EMAIL LIKE '%GMAIL%'`
 * @returns {String}  Formatted string.
 */
export default (value: string, params: Array<string> = []) =>
  replace(value, '{(\\w+)}', (match: string, index: number): string => {
    if (typeof params[index] !== 'undefined') {
      return params[index]
    }
    return match
  })
