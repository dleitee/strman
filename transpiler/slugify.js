'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.slugify = undefined;

var _strman = require('./strman');

/**
 * Converts a value to a slug.
 * @playground
 * var slugify = require('strman').slugify;
 * let title = "A Javascript string manipulation library.";
 * let result = slugify(title);
 * @param {String} value - The value to slugify
 * @return {String} - The slugified value
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