import split from './split'
import append from './append'
/**
 * Returns a reversed string.
 * @playground
 * var reverse = require('strman').reverse;
 * let title = "strman";
 * let result = reverse(title);
 * @param {String} value - The String!.
 * @return {String} - The String reversed!
 */
export default value => split(value, '').reduceRight((previous, current) => append(previous, current), '')
