import entitiesDecode from './lib/entitiesdecode'
import replace from './replace'
/**
 * Convert all HTML entities to applicable characters.
 * @playground
 * var htmlDecode = require('strman').htmlDecode;
 * let result = htmlDecode('&lt;div&gt;');
 * @params {String} value - value to decode.
 * @returns - The decoded data.
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
