/**
 * @module urlEncode
 * @description
 * Replaces all characters with the appropriate UTF-8 escape sequences.
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the urlEncode function
 * ```sh
 * yarn add strman.urlencode
 * ```
 * ## Usage
 * ```javascript
 * import { urlEncode } from 'strman'
 * // OR
 * import urlEncode from 'strman.urlencode'
 * ```
 * @param {String} value - The string to be encoded
 * @example
 * urlEncode('https://github.com/dleitee/strman/&name=áéíóú')
 * // => 'https://github.com/dleitee/strman/&name=%C3%A1%C3%A9%C3%AD%C3%B3%C3%BA'
 * @returns {String}  Returns a string in which all non-alphanumeric characters except -_.
 */
export default value => encodeURI(value)
