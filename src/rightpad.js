import substr from './substr'
import append from './append'
/**
 * Returns a new string of a given length such that the ending of the string is padded.
 * @playground
 * var rightPad = require('strman').rightPad
 * let title = "strman"
 * let result = rightPad(title, 10, 0)
 * @param {String} value - The String!.
 * @param {Number} _length - Max length of String.
 * @param {Char} char - Char to repeat.
 * @return {String} - String pad.
 */

const rightPad = (value, length, char) => {
  if (value.length === length) {
    return value
  }
  return rightPad(append(value, char), length, char)
}

export default (value, length, char = ' ') => rightPad(value, length, substr(String(char), 0, 1))
