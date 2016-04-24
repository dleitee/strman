'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.validCharLength = exports.validNumber = exports.validArrayString = exports.validString = undefined;

var _stringUtils = require('../string.utils.js');

var _number = require('./number');

var validString = function validString(value) {
    if (!(0, _stringUtils.isString)(value)) {
        throw new Error('[strman] ' + value + ' is not a String.');
    }

    return true;
};

exports.validString = validString;


var validArrayString = function validArrayString(array) {

    array.map(function (data) {
        if (!(0, _stringUtils.isString)(data)) {
            throw new Error('[strman] ' + data + ' is not a String.');
        }
        return data;
    });

    return true;
};

exports.validArrayString = validArrayString;


var validNumber = function validNumber(value) {
    if (!(0, _number._isNumber)(value)) {
        throw new Error('[strman] ' + value + ' is not a Number.');
    }

    return true;
};

exports.validNumber = validNumber;


var validCharLength = function validCharLength(char) {
    if ((0, _stringUtils.length)(char) === 0) {
        throw new Error('Char should be length >= 1');
    }

    return true;
};

exports.validCharLength = validCharLength;