// @flow
import indexOf from './indexof'

const isInteger = (value: number): boolean =>
  // eslint-disable-next-line no-restricted-globals
  typeof value === 'number' && isFinite(value) && Math.floor(value) === value

const getPosition = (
  value: string,
  search: string,
  position: number,
): number => {
  if (
    !isInteger(position) ||
    position > value.length ||
    position < search.length
  ) {
    return value.length - search.length
  }
  return position - search.length
}

/**
 * @module endsWith
 * @description
 * Test if `value` ends with `search`
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the endsWith function
 * ```sh
 * yarn add strman.endswith
 * ```
 * ## Usage
 * ```javascript
 * import { endsWith } from 'strman'
 * // OR
 * import endsWith from 'strman.endswith'
 * ```
 * @param {String} value The input string
 * @param {String} search The string to search for
 * @param {Number} [position] The start position/index within `value` to start searching
 * @param {Boolean} [caseSensitive=true] Use case (in-)sensitive matching
 * @example
 * const value = 'Daniel Leite'
 * const search = 'Leite'
 * endsWith(value, search)
 * // => true
 * @returns {Boolean} True if `value` ends with `search`
 */
export default (
  value: string,
  search: string,
  position: number = 0,
  caseSensitive: boolean = true,
): boolean => {
  const newPosition = getPosition(value, search, position)
  const lastIndex = indexOf(value, search, newPosition, caseSensitive)
  return lastIndex !== -1 && lastIndex === newPosition
}
