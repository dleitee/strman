import substr from './substr'
import append from './append'
/**
 * Truncate the unsecured form string, cutting the independent string of required position.
 * @playground
 * var truncate = require('strman').truncate
 * let title = "A Javascript string manipulation library."
 * let result = truncate(title, 16, '...')
 * @param {String} value - Value will be truncated unsecurely.
 * @param {Number} length - Size of the returned string.
 * @param {String} [_append = ''] - Value that will be added to the end of the return string.
 * @returns {String} - String truncated unsafely.
 */
export default (value, length, _append = '') => {
  if (length === 0) {
    return ''
  }

  if (length >= value.length) {
    return value
  }

  const truncated = substr(value, 0, length - _append.length)

  return append(truncated, _append)
}
