import toLowerCase from './tolowercase'
import trim from './trim'
import removeSpaces from './removespaces'
import replace from './replace'
import transliterate from './transliterate'
/**
 * @module slugify
 * @description
 * Converts a value to a slug.
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the slugify function
 * ```sh
 * yarn add strman.slugify
 * ```
 * ## Usage
 * ```javascript
 * import { slugify } from 'strman'
 * // OR
 * import slugify from 'strman.slugify'
 * ```
 * @param {String} value The value to slugify
 * @example
 * const title = 'A Javascript string manipulation library.'
 * slugify(title)
 * // => 'a-javascript-string-manipulation-library'
 * @returns {String} The slugified value
 */
export default (value) => {
  const lowerCaseValue = toLowerCase(value)
  const trimValue = trim(lowerCaseValue)
  const valueWithoutSpaces = removeSpaces(trimValue, '-')
  const valueWithE = replace(valueWithoutSpaces, '&', '-and-')
  const transliterateValue = transliterate(valueWithE)
  const replaceValue = replace(transliterateValue, '[^\\w\\-]+', '')
  return replace(replaceValue, '-+', '-')
}
