/**
 * Replaces all characters with the appropriate UTF-8 escape sequences.
 * @playground
 * var urlEncode = require('strman').urlEncode;
 * let result = urlEncode("https://github.com/dleitee/strman/&name=áéíóú");
 * @param {String} value - The string to be encoded
 * @returns {String} - Returns a string in which all non-alphanumeric characters except -_.
 */
export default value => encodeURI(value)
