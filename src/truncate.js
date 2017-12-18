// @form
import substr from './substr'
import append from './append'
/**
 * @module truncate
 * @description
 * Truncate the unsecured form string, cutting the independent string of required position.
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the truncate function
 * ```sh
 * yarn add strman.truncate
 * ```
 * ## Usage
 * ```javascript
 * import { truncate } from 'strman'
 * // OR
 * import truncate from 'strman.truncate'
 * ```
 * @param {String} value - Value will be truncated unsecurely.
 * @param {Number} length - Size of the returned string.
 * @param {String} [_append = ''] - Value that will be added to the end of the return string.
 * @example
 * const title = 'A Javascript string manipulation library.'
 * truncate(title, 16, '...')
 * // => 'A Javascript ...'
 * @returns {String}  String truncated unsafely.
 */
export default (value: string, length: number, _append: string = ''): string => {
  if (length === 0) {
    return ''
  }

  if (length >= value.length) {
    return value
  }

  const truncated = substr(value, 0, length - _append.length)

  return append(truncated, _append)
}
