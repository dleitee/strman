'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toCaseSensitive = undefined;

var _string = require('../string.cases');

var toCaseSensitive = function toCaseSensitive(value) {
    var caseSensitive = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
    return caseSensitive ? value : (0, _string.toUpperCase)(value);
};

exports.toCaseSensitive = toCaseSensitive;