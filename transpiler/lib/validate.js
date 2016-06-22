'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.validCharLength = exports.validNumber = exports.validArrayString = exports.validString = undefined;

var _stringUtils = require('../string.utils.js');

var _number = require('./number');

var _throw = require('./throw');

var errorNotATypeMessage = function errorNotATypeMessage(type, value) {
    return '[strman] ' + value + ' is not a ' + type + '.';
};

var validString = function validString(value) {
    if (!(0, _stringUtils.isString)(value)) {
        throw (0, _throw.error)(errorNotATypeMessage('String', value));
    }

    return true;
};

exports.validString = validString;


var validArrayString = function validArrayString(array) {

    array.map(function (data) {
        validString(data);
        return data;
    });

    return true;
};

exports.validArrayString = validArrayString;


var validNumber = function validNumber(value) {
    if (!(0, _number._isNumber)(value)) {
        throw (0, _throw.error)(errorNotATypeMessage('Number', value));
    }

    return true;
};

exports.validNumber = validNumber;


var validCharLength = function validCharLength(char) {
    if ((0, _stringUtils.length)(char) === 0) {
        throw (0, _throw.error)('Char should be length >= 1');
    }

    return true;
};

exports.validCharLength = validCharLength;