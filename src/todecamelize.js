import toCamelCase from './tocamelcase'
import toLowerCase from './tolowercase'
/**
 * Decamelize String
 * @playground
 * var toDecamelize = require('strman').toDecamelize;
 * let title = "A Javascript string manipulation library.";
 * let result = toDecamelize(title);
 * @param {String} value - The String!.
 * @return {String} - String decamelized.
 */
export default (value, chr = '_') => {
  const camel = toCamelCase(value)
  const string = camel.replace(/([A-Z])+/g, `${chr}$1`)
  return toLowerCase(string)
}
