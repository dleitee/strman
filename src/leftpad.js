import substr from './substr'
import append from './append'
import repeat from './repeat'
/**
 * Returns a new string of a given length such that the beginning of the string is padded.
 * @playground
 * var leftPad = require('strman').leftPad;
 * let title = "strman";
 * let result = leftPad(title, 10, 0);
 * @param {String} value - The String!.
 * @param {Number} length - Max length of String.
 * @param {Char} char - Char to repeat.
 * @return {String} - String pad.
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
