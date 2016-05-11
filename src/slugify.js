import {toLowerCase, trim, removeSpaces, replace, transliterate} from './strman';

/**
 * Converts a value to a slug.
 * @playground
 * var slugify = require('strman').slugify;
 * let title = "A Javascript string manipulation library.";
 * let result = slugify(title);
 * @param {String} value - The value to slugify
 * @return {String} - The slugified value
 */
const slugify = (value) => {

    let result = value;
    result = toLowerCase(result);
    result = trim(result);
    result = removeSpaces(result, '-');
    result = replace(result, '&','-and-');
    result = transliterate(result);
    result = replace(result, '[^\\w\\-]+', '');
    result = replace(result, '\-\-+','-');

    return result;
};

export {slugify};
