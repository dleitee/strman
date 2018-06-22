// @flow
/**
 * @module base64encode
 * @description
 * Encodes data with MIME base64.
 *
 * Base64-encoded data takes about 33% more space than the original data.
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the base64encode function
 * ```sh
 * yarn add strman.base64encode
 * ```
 * ## Usage
 * ```javascript
 * import { base64encode } from 'strman'
 * // OR
 * import base64encode from 'strman.base64encode'
 * ```
 * @param {String} value - The data to encode.
 * @example
 * base64Encode('strman')
 * // => 'c3RybWFu'
 * @returns {String} The base64 encoded data.
 */
export default (value: string): string => Buffer.from(value).toString('base64')
