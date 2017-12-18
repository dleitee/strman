// @flow
import split from './split'
import append from './append'
/**
 * @module reverse
 * @description
 * Returns a reversed string.
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the reverse function
 * ```sh
 * yarn add strman.reverse
 * ```
 * ## Usage
 * ```javascript
 * import { reverse } from 'strman'
 * // OR
 * import reverse from 'strman.reverse'
 * ```
 * @param {String} value - The String!
 * @example
 * reverse('strman')
 * // => 'namrts'
 * @returns {String}  The String reversed!
 */
export default (value: string): string =>
  split(value, '').reduceRight((previous, current) => append(previous, current), '')
