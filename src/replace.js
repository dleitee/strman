/**
 * Replace all ocurrences of 'search' value to 'newvalue'.

 * var replace = require('strman').replace;
 * let title = "superman";
 * let result = replace(title, 'upe', 't');
 * @param {String} value - The String!.
 * @param {String} search - String to search.
 * @param {String} newvalue - String to replace.
 * @param {Boolean} caseSensitive - if you use caseSensitive replace.
 * @param {Boolean} multiline - if you use multiline replace.
 * @return {String} - String replaced with 'newvalue'.
 */
const replace = (value, search = '', newvalue = '', caseSensitive = true, multiline = true) => {
    var flags = caseSensitive ? 'g' : 'gi';

    multiline ? flags + 'm' : flags;

    return value.replace(new RegExp(search, flags), newvalue);

};

export default replace;
