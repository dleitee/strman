/**
 * Decodes URL-encoded string
 * @playground
 * var urlDecode = require('strman').urlDecode;
 * let result = urlDecode("https://github.com/dleitee/strman/&name=%C3%A1%C3%A9%C3%AD%C3%B3%C3%BA");
 * @param {String} value - The string to be decoded
 * @returns {String} - Returns the decoded string.
 */
const urlDecode = (value) => decodeURI(value);

export {urlDecode};
