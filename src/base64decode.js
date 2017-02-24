/**
 * Decodes data encoded with MIME base64
 * @playground
 * var base64Decode = require('strman').base64Decode;
 * let result = base64Decode("c3RybWFu");
 * @param {String} value - The data to decode.
 * @returns - The decoded data.
 */
const base64Decode = (value) => new Buffer(value, 'base64').toString();

export {base64Decode};
