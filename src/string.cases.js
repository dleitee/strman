/*
 * Transform to lowercase
 * @params value - String to lowercase
 * @return String
 */
const toLowerCase = value => value.toLowerCase();

export {toLowerCase};

/*
 * Transform to uppercase
 * @params value - String to uppercase
 * @return String
 */
const toUpperCase = value => value.toUpperCase();

export {toUpperCase};

/*
 * Verify if has lowerCase
 * @param value
 * @return boolean
 */
const isLowerCase = (value) => value === toLowerCase(value);

export {isLowerCase};
/*
 * Verify if has upperCase
 * @param value
 * @return boolean
 */
const isUpperCase = (value) => value === toUpperCase(value);

export {isUpperCase};
