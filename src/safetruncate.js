import append from './append'
import lasstIndexOf from './lastindexof'
import indexof from './indexof'
import substr from './substr'

/**
 * Truncate the string securely, not cutting a word in half. It always returns the last full word.
 * @playground
 * var safeTruncate = require('strman').safeTruncate;
 * let title = "A Javascript string manipulation library.";
 * let result = safeTruncate(title, 15, '...');
 * @param {String} value - Value will be truncated securely.
 * @param {Number} length - Max size of the returned string.
 * @param {String} [_append = ''] - Value that will be added to the end of the return string. Example: '...'
 * @returns {String} - String truncated safely.
 */
const safeTruncate = (value, length, _append = '') => {

    let truncated = '';

    if(length === 0){
        return '';
    }

    if (length >= value.length) {
        return value;
    }

    length -= _append.length ;
    truncated = substr(value, 0, length);

    let position = indexOf(value, ' ', length - 1);

    if(position !== length){
        let lastPos = lastIndexOf(truncated, ' ');
        truncated = substr(truncated, 0, lastPos);
    }

    return append(truncated, _append);

};


