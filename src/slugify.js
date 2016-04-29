import {toLowerCase, trim, removeSpaces, replace, transliterate} from './strman';

/**
 * Converts a value to a slug.
 * Example: slugify('A Javascript string manipulation library') => 'a-javascript-string-manipulation-library'
 * @param value - value for slugify
 * @return String - returns a slugify value.
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
