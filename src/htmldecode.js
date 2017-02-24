/**
 * Convert all HTML entities to applicable characters.
 * @playground
 * var htmlDecode = require('strman').htmlDecode;
 * let result = htmlDecode('&lt;div&gt;');
 * @params {String} value - value to decode.
 * @returns - The decoded data.
 */
const htmlDecode = (value) =>
    replace(value, '(&\\w+;)',
        (match, index) =>
            typeof entitiesDecode.get(index) !== undefined ? entitiesDecode.get(index) : match
        );

export {htmlDecode};
