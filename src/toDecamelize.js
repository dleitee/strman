 /**
 * Decamelize String
 * @playground
 * var toDecamelize = require('strman').toDecamelize;
 * let title = "A Javascript string manipulation library.";
 * let result = toDecamelize(title);
 * @param {String} value - The String!.
 * @return {String} - String decamelized.
 */
const toDecamelize = (value, chr = '_') => {
    let camel = toCamelCase(value);
    let string = camel.replace(/([A-Z])+/g, chr + '$1');
    return toLowerCase(string);
};

export {toDecamelize};
