import toDecamelize from './todecamelize'
/**
 * @module toSnakeCase
 * @description
 * Transform to snake_case.
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the toSnakeCase function
 * ```sh
 * yarn add strman.tosnakecase
 * ```
 * ## Usage
 * ```javascript
 * import { toSnakeCase } from 'strman'
 * // OR
 * import toSnakeCase from 'strman.tosnakecase'
 * ```
 * @param {String} value The String!
 * @example
 * const title = 'A Javascript string manipulation library.'
 * toSnakeCase(title)
 * // => 'a_javascript_string_manipulation_library.'
 * @returns {String} String in snake_case.
 */
export default value => toDecamelize(value, '_')
