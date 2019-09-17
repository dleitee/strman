// @flow
import entitiesEncode from './lib/entitiesencode'
import replace from './replace'
/**
 * @module htmlEncode
 * @description
 * Convert all applicable characters to HTML entities.
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the htmlEncode function
 * ```sh
 * yarn add strman.htmlencode
 * ```
 * ## Usage
 * ```javascript
 * import { htmlEncode } from 'strman'
 * // OR
 * import htmlEncode from 'strman.htmlencode'
 * ```
 * @param {String} value value to encode.
 * @example
 * htmlEncode('<div>')
 * // => '&lt;div&gt;'
 * @returns { String } The encoded data.
 */
export default (value: string): string =>
  replace(
    value,
    '[\\u00A0-\\u9999<>\\&]',
    (match: string): string => {
      if (typeof entitiesEncode[match] !== 'undefined') {
        return entitiesEncode[match]
      }
      return match
    },
    true,
    true
  )
