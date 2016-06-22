import {entitiesEncode} from './lib/entities';
import {chars, leftPad, replace} from './strman';
import
    {LENGTH_HEXADECIMAL, LENGTH_BINARY, LENGTH_DECIMAL, BASE_HEXADECIMAL, BASE_BINARY, BASE_DECIMAL}
    from './lib/numerical.base';

const encode = (value, length, base) =>
    chars(value).map((data) => leftPad(data.charCodeAt(0).toString(base), length, '0')).join('');

/**
 * Convert string chars to hexadecimal unicode (4 digits)
 * @playground
 * var hexEncode = require('strman').hexEncode;
 * let result = hexEncode("strman");
 * @param {String} value - Value to encode
 * @returns {String} - String in hexadecimal format.
 */
const hexEncode = (value) => encode(value, LENGTH_HEXADECIMAL, BASE_HEXADECIMAL);

export {hexEncode};

/**
 * Convert string chars to binary unicode (16 digits)
 * @playground
 * var binEncode = require('strman').binEncode;
 * let result = binEncode("strman");
 * @param {String} value - Value to encode
 * @returns {String} - String in binary format.
 */
const binEncode = (value) =>  encode(value, LENGTH_BINARY, BASE_BINARY);

export {binEncode};

/**
 * Convert string chars to decimal unicode (5 digits)
 * @playground
 * var decEncode = require('strman').decEncode;
 * let result = decEncode("strman");
 * @param {String} value - Value to encode
 * @returns {String} - String in decimal format.
 */
const decEncode = (value) => encode(value, LENGTH_DECIMAL, BASE_DECIMAL);

export {decEncode};


/**
 * Replaces all characters with the appropriate UTF-8 escape sequences.
 * @playground
 * var urlEncode = require('strman').urlEncode;
 * let result = urlEncode("https://github.com/dleitee/strman/&name=áéíóú");
 * @param {String} value - The string to be encoded
 * @returns {String} - Returns a string in which all non-alphanumeric characters except -_.
 */
const urlEncode = (value) => encodeURI(value);

export {urlEncode};

/**
 * Encodes data with MIME base64.
 * Base64-encoded data takes about 33% more space than the original data.
 * @playground
 * var base64Encode = require('strman').base64Encode;
 * let result = base64Encode("strman");
 * @param {String} value - The data to encode.
 * @returns - The encoded data.
 */
const base64Encode = (value) => new Buffer(value).toString('base64');

export {base64Encode};

/**
 * Convert all applicable characters to HTML entities.
 * @playground
 * var htmlEncode = require('strman').htmlEncode;
 * let result = htmlEncode('<div>');
 * @params {String} value - value to encode.
 * @returns - The encoded data.
 */
const htmlEncode = (value) => replace(value, '[\\u00A0-\\u9999<>\\&]',
    (match) =>
        typeof entitiesEncode.get(match) !== undefined ? entitiesEncode.get(match) : match , true, true);

export {htmlEncode};
