import toUpperCase from './touppercase'
/**
 * Transform to StudlyCaps.
 * @playground
 * var toStudlyCaps = require('strman').toStudlyCaps;
 * let title = "A Javascript string manipulation library.";
 * let result = toStudlyCaps(title);
 * @param {String} value - The String!.
 * @return {String} - String in StudlyCaps.
 */
export default (value) => {
  const string = value.replace(/[-_\s]+(.)?/g, (match, chr) => {
    if (chr) {
      return toUpperCase(chr)
    }
    return ''
  })
  return toUpperCase(string.substr(0, 1)) + string.substr(1)
}
