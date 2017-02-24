/**
 * Transform to snake_case.
 * @playground
 * var toSnakeCase = require('strman').toSnakeCase;
 * let title = "A Javascript string manipulation library.";
 * let result = toSnakeCase(title);
 * @param {String} value - The String!.
 * @return {String} - String in snake_case.
 */
const toSnakeCase = value => {
    return toDecamelize(value, '_');
};

export {toSnakeCase};
