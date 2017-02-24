/**
 * Convert all applicable characters to HTML entities.
 * @playground
 * var htmlEncode = require('strman').htmlEncode;
 * let result = htmlEncode('<div>');
 * @params {String} value - value to encode.
 * @returns - The encoded data.
 */
const htmlEncode = (value) => replace(value, '[\\u00A0-\\u9999<>\\&]',
    (match) =>
        typeof entitiesEncode.get(match) !== undefined ? entitiesEncode.get(match) : match , true, true);

export {htmlEncode};
