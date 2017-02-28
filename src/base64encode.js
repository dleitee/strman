/**
 * Encodes data with MIME base64.
 * Base64-encoded data takes about 33% more space than the original data.
 * @playground
 * var base64Encode = require('strman').base64Encode;
 * let result = base64Encode("strman");
 * @param {String} value - The data to encode.
 * @returns - The encoded data.
 */
export default value => new Buffer(value).toString('base64')
