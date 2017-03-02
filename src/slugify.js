import toLowerCase from './tolowercase'
import trim from './trim'
import removeSpaces from './removespaces'
import replace from './replace'
import transliterate from './transliterate'
/**
 * Converts a value to a slug.
 * @playground
 * var slugify = require('strman').slugify
 * let title = "A Javascript string manipulation library."
 * let value = slugify(title)
 * @param {String} value - The value to slugify
 * @return {String} - The slugified value
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
