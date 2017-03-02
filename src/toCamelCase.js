/**
 * Transform to camelCase.
 * @playground
 * var toCamelCase = require('strman').toCamelCase;
 * let title = "A Javascript string manipulation library.";
 * let result = toCamelCase(title);
 * @param {String} value - The String!.
 * @return {String} - String in camelCase.
 */
export default value => {
    let string = toStudlyCaps(value);
    return toLowerCase(string.substr(0, 1)) + string.substr(1);
};


