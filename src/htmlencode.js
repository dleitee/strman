import entitiesEncode from './lib/entitiesencode'
import replace from './replace'
/**
 * Convert all applicable characters to HTML entities.
 * @playground
 * var htmlEncode = require('strman').htmlEncode;
 * let result = htmlEncode('<div>');
 * @params {String} value - value to encode.
 * @returns - The encoded data.
 */
export default value => replace(value, '[\\u00A0-\\u9999<>\\&]',
  (match) => {
    if (typeof entitiesEncode[match] !== 'undefined') {
      return entitiesEncode[match]
    }
    return match
  }, true, true)
