import substr from './substr'
import append from './append'
import repeat from './repeat'
/**
 * @module leftPad
 * @description
 * Returns a new string of a given length such that the beginning of the string is padded.
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the leftPad function
 * ```sh
 * yarn add strman.leftpad
 * ```
 * ## Usage
 * ```javascript
 * import { leftPad } from 'strman'
 * // OR
 * import leftPad from 'strman.leftpad'
 * ```
 * @param {String} value - The String!
 * @param {Number} length - Max length of String.
 * @param {Char} [char = ' '] - Char to repeat.
 * @example
 * const title = 'strman'
 * leftPad(title, 10, 0)
 * // => '0000strman'
 * @returns {String}  String pad.
 */
export default (value, length, char = ' ') => {
  let result = value
  let newchar = String(char)

  if (newchar.length > 1) {
    newchar = substr(newchar, 0, 1)
  }

  const newlength = length - value.length
  result = append(repeat(newchar, newlength), result)

  return result
}
