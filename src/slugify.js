import {toLowerCase, trim, removeSpaces, replace, transliterate} from './strman';

/**
 * Converts a value to a slug.
 * @playground
 * var slugify = require('strman').slugify;
 * let title = "A Javascript string manipulation library.";
 * let value = slugify(title);
 * @param {String} value - The value to slugify
 * @return {String} - The slugified value
 */
const slugify = (value) => {

    value = toLowerCase(value);
    value = trim(value);
    value = removeSpaces(value, '-');
    value = replace(value, '&','-and-');
    value = transliterate(value);
    value = replace(value, '[^\\w\\-]+', '');
    value = replace(value, '\-\-+','-');

    return value;
};

export {slugify};
