// @flow
import substr from './substr'
import append from './append'

const rightPad = (value:string, length:number, char:string):string => {
  if (value.length === length) {
    return value
  }
  return rightPad(append(value, char), length, char)
}

/**
 * @module rightPad
 * @description
 * Returns a new string of a given length such that the ending of the string is padded.
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the rightPad function
 * ```sh
 * yarn add strman.rightpad
 * ```
 * ## Usage
 * ```javascript
 * import { rightPad } from 'strman'
 * // OR
 * import rightPad from 'strman.rightpad'
 * ```
 * @param {String} value The String!
 * @param {Number} _length Max length of String.
 * @param {Char} char Char to repeat.
 * @example
 * const title = "strman"
 * rightPad(title, 10, 0)
 * // => 'strman0000'
 * @returns {String} String pad.
 */
export default (value:string, length:number, char:string = ' '):string => rightPad(value, length, substr(String(char), 0, 1))
