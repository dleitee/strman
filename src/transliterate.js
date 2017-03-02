import ascii from './lib/ascii'
import replace from './replace'

/**
 * Remove all non valid characters. Example: change á => a or ẽ => e.
 * @playground
 * var transliterate = require('strman').transliterate;
 * let title = "strmáñ";
 * let result = transliterate(title);
 * @param {String} value - The String!.
 * @return {String} - String without non valid characters.
 */
export default value =>
  Object.keys(ascii).reduce((newValue, currentKey) =>
    ascii[currentKey].reduce(
      (previous, currentValue) => replace(previous, currentValue, currentKey),
      newValue,
    ),
    value,
  )
