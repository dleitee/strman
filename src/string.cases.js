 /**
 * Transform to lowercase.
 * @playground
 * var toLowerCase = require('strman').toLowerCase;
 * let title = "A Javascript string manipulation library.";
 * let result = toLowerCase(title);
 * @param {String} value - The String!.
 * @return {String} - String in lowercase.
 */
const toLowerCase = value => value.toLowerCase();

export {toLowerCase};

/**
 * Transform to uppercase.
 * @playground
 * var toUpperCase = require('strman').toUpperCase;
 * let title = "A Javascript string manipulation library.";
 * let result = toUpperCase(title);
 * @param {String} value - The String!.
 * @return {String} - String in uppercase.
 */
const toUpperCase = value => value.toUpperCase();

export {toUpperCase};

 /**
 * Verify if has lowerCase
 * @playground
 * var isLowerCase = require('strman').isLowerCase;
 * let title = "A Javascript string manipulation library.";
 * let result = isLowerCase(title);
 * @param {String} value - The String!.
 * @return {Boolean} - String is lowercase?.
 */
const isLowerCase = (value) => value === toLowerCase(value);

export {isLowerCase};
 
 /**
 * Verify if has UPPERCASE
 * @playground
 * var isUpperCase = require('strman').isUpperCase;
 * let title = "A Javascript string manipulation library.";
 * let result = isUpperCase(title);
 * @param {String} value - The String!.
 * @return {Boolean} - String is UPPERCASE?.
 */
const isUpperCase = (value) => value === toUpperCase(value);

export {isUpperCase};

/**
 * Transform to StudlyCaps.
 * @playground
 * var toStudlyCaps = require('strman').toStudlyCaps;
 * let title = "A Javascript string manipulation library.";
 * let result = toStudlyCaps(title);
 * @param {String} value - The String!.
 * @return {String} - String in StudlyCaps.
 */
const toStudlyCaps = value => {
    let string = value.replace(/[\-_\s]+(.)?/g,
                            (match, chr) => chr ? toUpperCase(chr) : '');
    return toUpperCase(string.substr(0, 1)) + string.substr(1);
};

export {toStudlyCaps};

/**
 * Transform to camelCase.
 * @playground
 * var toCamelCase = require('strman').toCamelCase;
 * let title = "A Javascript string manipulation library.";
 * let result = toCamelCase(title);
 * @param {String} value - The String!.
 * @return {String} - String in camelCase.
 */
const toCamelCase = value => {
    let string = toStudlyCaps(value);
    return toLowerCase(string.substr(0, 1)) + string.substr(1);
};

export {toCamelCase};

 /**
 * Decamelize String
 * @playground
 * var toDecamelize = require('strman').toDecamelize;
 * let title = "A Javascript string manipulation library.";
 * let result = toDecamelize(title);
 * @param {String} value - The String!.
 * @return {String} - String decamelized.
 */
const toDecamelize = (value, chr = '_') => {
    let camel = toCamelCase(value);
    let string = camel.replace(/([A-Z])+/g, chr + '$1');
    return toLowerCase(string);
};

export {toDecamelize};

/**
 * Transform to snake_case.
 * @playground
 * var toSnakeCase = require('strman').toSnakeCase;
 * let title = "A Javascript string manipulation library.";
 * let result = toSnakeCase(title);
 * @param {String} value - The String!.
 * @return {String} - String in snake_case.
 */
const toSnakeCase = value => {
    return toDecamelize(value, '_');
};

export {toSnakeCase};

/**
 * Transform to kebab-case.
 * @playground
 * var toKebabCase = require('strman').toKebabCase;
 * let title = "A Javascript string manipulation library.";
 * let result = toKebabCase(title);
 * @param {String} value - The String!.
 * @return {String} - String in kebab-case.
 */
const toKebabCase = value => {
    return toDecamelize(value, '-');
};

export {toKebabCase};
