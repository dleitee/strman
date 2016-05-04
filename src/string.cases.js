/**
 * Transform to lowercase
 * @params value - String to lowercase
 * @return String
 */
const toLowerCase = value => value.toLowerCase();

export {toLowerCase};

/**
 * Transform to uppercase
 * @params value - String to uppercase
 * @return String
 */
const toUpperCase = value => value.toUpperCase();

export {toUpperCase};

/**
 * Verify if has lowerCase
 * @param value
 * @return boolean
 */
const isLowerCase = (value) => value === toLowerCase(value);

export {isLowerCase};
/**
 * Verify if has upperCase
 * @param value
 * @return boolean
 */
const isUpperCase = (value) => value === toUpperCase(value);

export {isUpperCase};

/**
 * Transform to StudlyCaps
 * @params value
 * @return string
 */
const toStudlyCaps = value => {
    let string = value.replace(/[\-_\s]+(.)?/g,
                            (match, chr) => chr ? toUpperCase(chr) : '');
    return toUpperCase(string.substr(0, 1)) + string.substr(1);
};

export {toStudlyCaps};

/**
 * Transform to camelCase
 * @params value
 * @return string
 */
const toCamelCase = value => {
    let string = toStudlyCaps(value);
    return toLowerCase(string.substr(0, 1)) + string.substr(1);
};

export {toCamelCase};

/**
 * Decamelize String
 * @params value
 * @return string
 */
const toDecamelize = (value, chr = '_') => {
    let camel = toCamelCase(value);
    let string = camel.replace(/([A-Z])+/g, chr + '$1');
    return toLowerCase(string);
};

export {toDecamelize};

/**
 * Decamelize snake_case
 * @params value
 * @return string
 */
const toSnakeCase = value => {
    return toDecamelize(value, '_');
};

export {toSnakeCase};

/**
 * Decamelize kebab-case
 * @params value
 * @return string
 */
const toKebabCase = value => {
    return toDecamelize(value, '-');
};

export {toKebabCase};
