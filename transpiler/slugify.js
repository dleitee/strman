'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.slugify = undefined;

var _strman = require('./strman');

/*
 * Converts a value to a slug.
 * Example: slugify('A Javascript string manipulation library') => 'a-javascript-string-manipulation-library'
 * @param value - value for slugify
 * @return String - returns a slugify value.
 */
var slugify = function slugify(value) {

    var result = value;
    result = (0, _strman.toLowerCase)(result);
    result = (0, _strman.trim)(result);
    result = (0, _strman.removeSpaces)(result, '-');
    result = (0, _strman.replace)(result, '&', '-and-');
    result = (0, _strman.transliterate)(result);
    result = (0, _strman.replace)(result, '[^\\w\\-]+', '');
    result = (0, _strman.replace)(result, '\-\-+', '-');

    return result;
};

exports.slugify = slugify;