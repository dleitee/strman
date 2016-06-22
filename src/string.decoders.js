import {entitiesDecode} from './lib/entities';
import {replace} from './strman';
import
    {LENGTH_HEXADECIMAL, LENGTH_BINARY, LENGTH_DECIMAL, BASE_HEXADECIMAL, BASE_BINARY, BASE_DECIMAL}
    from './lib/numerical.base';

const decode = (value, length, base) =>
    value.match(new RegExp(`.{1,${length}}`,'g'))
        .map((string)=>String.fromCharCode(parseInt(string, base))).join('');


/**
 * Convert hexadecimal unicode (4 digits) string to string chars
 * @playground
 * var hexDecode = require('strman').hexDecode;
 * let result = hexDecode("007300740072006d0061006e");
 * @param {String} value - Value to decode
 * @returns {String} - String decoded.
 */
const hexDecode = (value) => decode(value, LENGTH_HEXADECIMAL, BASE_HEXADECIMAL);

export {hexDecode};

/**
 * Convert binary unicode (16 digits) string to string chars
 * @playground
 * var binDecode = require('strman').binDecode;
 * let result = binDecode("000000000111001100000000011101000000000001110010000000000110110100000000011000010000000001101110");
 * @param {String} value - Value to decode
 * @returns {String} - String decoded.
 */
const binDecode = (value) => decode(value, LENGTH_BINARY, BASE_BINARY);

export {binDecode};

/**
 * Convert binary unicode (16 digits) string to string chars
 * @playground
 * var decDecode = require('strman').decDecode;
 * let result = decDecode("001150011600114001090009700110");
 * @param {String} value - Value to decode
 * @returns {String} - String decoded.
 */
const decDecode = (value) => decode(value, LENGTH_DECIMAL, BASE_DECIMAL);

export {decDecode};

/**
 * Decodes URL-encoded string
 * @playground
 * var urlDecode = require('strman').urlDecode;
 * let result = urlDecode("https://github.com/dleitee/strman/&name=%C3%A1%C3%A9%C3%AD%C3%B3%C3%BA");
 * @param {String} value - The string to be decoded
 * @returns {String} - Returns the decoded string.
 */
const urlDecode = (value) => decodeURI(value);

export {urlDecode};

/**
 * Decodes data encoded with MIME base64
 * @playground
 * var base64Decode = require('strman').base64Decode;
 * let result = base64Decode("c3RybWFu");
 * @param {String} value - The data to decode.
 * @returns - The decoded data.
 */
const base64Decode = (value) => new Buffer(value, 'base64').toString();

export {base64Decode};

/**
 * Convert all HTML entities to applicable characters.
 * @playground
 * var htmlDecode = require('strman').htmlDecode;
 * let result = htmlDecode('&lt;div&gt;');
 * @params {String} value - value to decode.
 * @returns - The decoded data.
 */
const htmlDecode = (value) =>
    replace(value, '(&\\w+;)',
        (match, index) =>
            typeof entitiesDecode.get(index) !== undefined ? entitiesDecode.get(index) : match
        );

export {htmlDecode};
