import entitiesDecode from './lib/entitiesdecode'
import replace from './replace'
/**
 * @module htmlDecode
 * @description
 * Convert all HTML entities to applicable characters.
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the htmlDecode function
 * ```sh
 * yarn add strman.htmldecode
 * ```
 * ## Usage
 * ```javascript
 * import { htmlDecode } from 'strman'
 * // OR
 * import htmlDecode from 'strman.htmldecode'
 * ```
 * @param {String} value - value to decode.
 * @example
 * htmlDecode('&lt;div&gt;')
 * // => '<div>'
 * @returns { String } The decoded data.
 */
export default value =>
  replace(value, '(&\\w+;)',
    (match, index) => {
      if (typeof entitiesDecode[index] !== 'undefined') {
        return entitiesDecode[index]
      }
      return match
    },
  )
