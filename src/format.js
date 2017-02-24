import replace from './replace'

/**
 * Formats a string using parameters.
 * @playground
 * var format = require('strman').format;
 * let select = "SELECT * FROM CONTACTS WHERE NAME LIKE '%{0}%' AND EMAIL LIKE '%{1}%'";
 * let result = format(select, "DANIEL", "GMAIL");
 * @param {String} value - Value that will be formatted.
 * @param {String[]} params - Array with the parameters described in the string.
 * @returns {String} - Formatted string.
 */
const format = (value, params = []) =>
    replace(value, '{(\\w+)}',
        (match, index) => typeof params[index] !== undefined ? params[index] : match
    );

export default format;
