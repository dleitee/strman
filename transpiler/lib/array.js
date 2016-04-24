'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _isArray = exports._isArray = function _isArray(value) {
    return value !== null && value.length >= 0 && Object.prototype.toString.call(value) === '[object Array]';
};

var _pop = exports._pop = function _pop(array) {
    var newarray = [];
    for (var i = 0; i < array.length - 1; i++) {
        newarray[i] = array[i];
    }
    return newarray;
};