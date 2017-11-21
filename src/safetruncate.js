// @flow
import _append from './append'
import lastIndexOf from './lastindexof'
import indexOf from './indexof'
import substr from './substr'

/**
 * @module safeTruncate
 * @description
 * Truncate the string securely, not cutting a word in half. It always returns the last full word.
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the safeTruncate function
 * ```sh
 * yarn add strman.safetruncate
 * ```
 * ## Usage
 * ```javascript
 * import { safeTruncate } from 'strman'
 * // OR
 * import safeTruncate from 'strman.safetruncate'
 * ```
 * @param {String} value Value will be truncated securely.
 * @param {Number} length Max size of the returned string.
 * @param {String} [append = ''] Value that will be added to the end of the return string.
 * @example
 * const title = 'A Javascript string manipulation library.'
 * safeTruncate(title, 15, '...');
 * // => 'A Javascript...'
 * @returns {String}  String truncated safely.
 */
export default (value:string, length:number, append:string = ''):string => {
  let truncated = ''

  if (length === 0) {
    return ''
  }

  if (length >= value.length) {
    return value
  }

  const newLength = length - append.length
  truncated = substr(value, 0, newLength)

  const position = indexOf(value, ' ', newLength - 1)

  if (position !== newLength) {
    const lastPos = lastIndexOf(truncated, ' ')
    truncated = substr(truncated, 0, lastPos)
  }

  return _append(truncated, append)
}

