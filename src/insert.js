// @flow
import _substr from './substr'
import append from './append'
/**
 * @module insert
 * @description
 * Inserts 'substr' into the 'value' at the 'index' provided.
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the insert function
 * ```sh
 * yarn add strman.insert
 * ```
 * ## Usage
 * ```javascript
 * import { insert } from 'strman'
 * // OR
 * import insert from 'strman.insert'
 * ```
 * @param {String} value The String!
 * @param {String} substr Value to insert.
 * @param {Number} index Index to insert substr.
 * @example
 * const title = "trman"
 * insert(title, 's', 0)
 * // => 'strman'
 * @returns {String} String with substr added.
 */
export default (value:string, substr:string, index:number):string => {
  if (index > value.length) {
    return value
  }

  const start = _substr(value, 0, index)
  const end = _substr(value, index, value.length)

  return append(start, substr, end)
}
