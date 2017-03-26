import toDecamelize from './todecamelize'
/**
 * @module toKebabCase
 * @description
 * Transform to kebab-case.
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the toKebabCase function
 * ```sh
 * yarn add strman.tokebabcase
 * ```
 * ## Usage
 * ```javascript
 * import { toKebabCase } from 'strman'
 * // OR
 * import toKebabCase from 'strman.tokebabcase'
 * ```
 * @param {String} value The String!
 * @example
 * const title = 'A Javascript string manipulation library.'
 * toKebabCase(title)
 * // => 'a-javascript-string-manipulation-library.'
 * @returns {String} String in kebab-case.
 */
export default value => toDecamelize(value, '-')
