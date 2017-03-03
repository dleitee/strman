import toDecamelize from './todecamelize'
/**
 * Transform to snake_case.
 * @playground
 * var toSnakeCase = require('strman').toSnakeCase;
 * let title = "A Javascript string manipulation library.";
 * let result = toSnakeCase(title);
 * @param {String} value - The String!.
 * @return {String} - String in snake_case.
 */
export default value => toDecamelize(value, '_')
