"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _pop = exports._pop = function _pop(array) {
    return array.reduce(function (previous, current, index) {
        if (index < array.length - 1) {
            previous.push(current);
            return previous;
        }
        return previous;
    }, []);
};