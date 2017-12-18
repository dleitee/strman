// @flow
/**
 * @module replace
 * @description
 * Replace all ocurrences of 'search' value to 'newvalue'.
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the replace function
 * ```sh
 * yarn add strman.replace
 * ```
 * ## Usage
 * ```javascript
 * import { replace } from 'strman'
 * // OR
 * import replace from 'strman.replace'
 * ```
 * @param {String} value The String!
 * @param {String} search String to search.
 * @param {String} newvalue String to replace.
 * @param {Boolean} caseSensitive if you use caseSensitive replace.
 * @param {Boolean} multiline if you use multiline replace.
 * @example
 * const title = 'superman'
 * replace(title, 'upe', 't')
 * // => 'strman'
 * @returns {String} String replaced with 'newvalue'.
 */
export default (
  value: string,
  search: string = '',
  newvalue: string | Function = '',
  caseSensitive: boolean = true,
  multiline: boolean = true,
): string => {
  const flags = caseSensitive ? 'g' : 'gi'
  const flagsMultiline = multiline ? `${flags}m` : flags

  return value.replace(new RegExp(search, flagsMultiline), newvalue)
}
