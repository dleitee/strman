import substr from './substr'
import append from './append'
/**
 * Truncate the unsecured form string, cutting the independent string of required position.
 * @playground
 * var truncate = require('strman').truncate;
 * let title = "A Javascript string manipulation library.";
 * let result = truncate(title, 16, '...');
 * @param {String} value - Value will be truncated unsecurely.
 * @param {Number} _length - Size of the returned string.
 * @param {String} [_append = ''] - Value that will be added to the end of the return string. Example: '...'
 * @returns {String} - String truncated unsafely.
 */
const truncate = (value, _length, _append = '') => {

    let truncated = '';

    if(_length === 0){
        return '';
    }

    if (_length >= value.length) {
        return value;
    }

    truncated = substr(value, 0, _append.length);

    return append(truncated, _append);

};

export default truncate;
