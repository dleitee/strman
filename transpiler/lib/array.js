"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _pop = exports._pop = function _pop(array) {
    var newarray = [];
    for (var i = 0; i < array.length - 1; i++) {
        newarray[i] = array[i];
    }
    return newarray;
};