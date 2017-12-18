// @flow
import ascii from './lib/ascii'
import replace from './replace'

/**
 * @module transliterate
 * @description
 * Remove all non valid characters. Example: change á => a or ẽ => e.
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the transliterate function
 * ```sh
 * yarn add strman.transliterate
 * ```
 * ## Usage
 * ```javascript
 * import { transliterate } from 'strman'
 * // OR
 * import transliterate from 'strman.transliterate'
 * ```
 * @param {String} value - The String!
 * @example
 * const title = 'strmáñ'
 * transliterate(title)
 * // => 'strman'
 * @returns {String}  String without non valid characters.
 */
export default (value: string): string =>
  Object.keys(ascii).reduce(
    (newValue, currentKey) =>
      ascii[currentKey].reduce(
        (previous, currentValue) => replace(previous, currentValue, currentKey),
        newValue,
      ),
    value,
  )
