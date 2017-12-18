// @flow
import replace from './replace'
/**
 * @module removeNonWords
 * @description
 * Remove all non word characters.
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the removeNonWords function
 * ```sh
 * yarn add strman.removenowords
 * ```
 * ## Usage
 * ```javascript
 * import { removeNonWords } from 'strman'
 * // OR
 * import removeNonWords from 'strman.removenowords'
 * ```
 * @param {String} value The String!
 * @param {String} [replaced = ''] Value to replace.
 * @example
 * const title = '__strman../'
 * removeNonWords(title)
 * // => 'strman'
 * @returns {String} String without non word characters.
 */
export default (value: string, replaced: string = ''): string => replace(value, '[^\\w]+', replaced)
