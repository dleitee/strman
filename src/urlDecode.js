// @form
/**
 * @module urlDecode
 * @description
 * Decodes URL-encoded string
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the urlDecode function
 * ```sh
 * yarn add strman.urldecode
 * ```
 * ## Usage
 * ```javascript
 * import { urlDecode } from 'strman'
 * // OR
 * import urlDecode from 'strman.urldecode'
 * ```
 * @param {String} value - The string to be decoded
 * @example
 * urlDecode('https://github.com/dleitee/strman/&name=%C3%A1%C3%A9%C3%AD%C3%B3%C3%BA')
 * // => 'https://github.com/dleitee/strman/&name=áéíóú'
 * @returns {String} Returns the decoded string.
 */
export default (value: string): string => decodeURI(value)
