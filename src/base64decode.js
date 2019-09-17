// @flow
/**
 * @module base64decode
 * @description
 * Decodes data encoded with MIME base64
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the base64decode function
 * ```sh
 * yarn add strman.base64decode
 * ```
 * ## Usage
 * ```javascript
 * import { base64decode } from 'strman'
 * // OR
 * import base64decode from 'strman.base64decode'
 * ```
 * @param {String} value - The data to decode.
 * @example
 * base64Decode('c3RybWFu')
 * // => 'strman'
 * @returns {String} The base64 decoded data.
 */
export default (value: string): string => Buffer.from(value, 'base64').toString()
