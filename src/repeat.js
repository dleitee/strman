/**
 * Returns a repeated string given a multiplier.
 * @playground
 * var repeat = require('strman').repeat
 * let title = "strman"
 * let result = repeat(title, 5)
 * @param {String} value - The String!.
 * @param {Number} multiplier - Number of repeats.
 * @return {String} - The String repeated!
 */
export default (value, multiplier) => {
  let i = 0
  let result = ''
  while (multiplier > i) {
    result += value
    i += 1
  }
  return result
}
