// @flow
import append from './append'
/**
 * @module surround
 * @description
 * Surrounds a 'value' with the given 'substr'.
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the surround function
 * ```sh
 * yarn add strman.surround
 * ```
 * ## Usage
 * ```javascript
 * import { surround } from 'strman'
 * // OR
 * import surround from 'strman.surround'
 * ```
 * @param {String} value - The String!
 * @param {String} substr
 * The substr to append on left, if substrRight is null, this is appended in right.
 * @param {String} substrRight - The substr to append on right.
 * @example
 * surround('strman', '<', '>')
 * // => '<strman>'
 * @returns {String} The String with surround substrs!
 */
export default (value:string, _substr:string = '', substrRight:?string = null) =>
  append(_substr, value, substrRight === null ? _substr : substrRight)
