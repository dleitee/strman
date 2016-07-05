'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.inequal = exports.equal = exports.compare = exports.format = exports.removeEmptyStrings = exports.truncate = exports.safeTruncate = exports.slice = exports.surround = exports.shuffle = exports.reverse = exports.repeat = exports.removeRight = exports.removeLeft = exports.prependArray = exports.prepend = exports.split = exports.substr = exports.rightPad = exports.leftPad = exports.length = exports.insert = exports.lastIndexOf = exports.indexOf = exports.last = exports.first = exports.ensureRight = exports.ensureLeft = exports.startsWith = exports.endsWith = exports.countSubstr = exports.containsAny = exports.containsAll = exports.contains = exports.removeNonWords = exports.collapseWhitespace = exports.chars = exports.between = exports.at = exports.appendArray = exports.append = exports.transliterate = exports.replace = exports.removeSpaces = exports.rightTrim = exports.leftTrim = exports.trim = exports.isString = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _ascii = require('./lib/ascii');

var _array = require('./lib/array');

var _case = require('./lib/case');

/**
 * Checks whether a string.
 * @playground
 * var isString = require('strman').isString;
 * let title = "A Javascript string manipulation library.";
 * let result = isString(title);
 * @param {String} value - The String!.
 * @return {Boolean} - if 'value' isString, return true, else false.
 */
var isString = function isString(value) {
    return Object.prototype.toString.call(value) === '[object String]';
};

exports.isString = isString;

/**
 * Remove all spaces on left and right.
 * @playground
 * var trim = require('strman').trim;
 * let title = "   strman   ";
 * let result = trim(title);
 * @params {String} value - String to remove spaces.
 * @params {String = ' '} char - if you need remove other char on boarders.
 * @return {String} - String without boarders spaces.
 */

var trim = function trim(value) {
    var char = arguments.length <= 1 || arguments[1] === undefined ? ' ' : arguments[1];
    return leftTrim(rightTrim(value, char), char);
};

exports.trim = trim;

/**
 * Remove all spaces on left.
 * @playground
 * var leftTrim = require('strman').leftTrim;
 * let title = "   strman";
 * let result = leftTrim(title);
 * @param {String} value - The String!.
 * @params {String = ' '} char - if you need remove other char on left boarders.
 * @return {String} - String without left boarders spaces.
 */

var leftTrim = function leftTrim(value) {
    var char = arguments.length <= 1 || arguments[1] === undefined ? ' ' : arguments[1];
    return replace(value, '^' + char + '+', '');
};

exports.leftTrim = leftTrim;

/**
 * Remove all spaces on right.
 * @playground
 * var rightTrim = require('strman').rightTrim;
 * let title = "strman     ";
 * let result = rightTrim(title);
 * @param {String} value - The String!.
 * @params {String = ' '} char - if you need remove other char on right boarders.
 * @return {String} - String without right boarders spaces.
 */

var rightTrim = function rightTrim(value) {
    var char = arguments.length <= 1 || arguments[1] === undefined ? ' ' : arguments[1];
    return replace(value, char + '+$', '');
};

exports.rightTrim = rightTrim;

/**
 * Remove all spaces and replace for value.
 * @playground
 * var removeSpaces = require('strman').removeSpaces;
 * let title = "  s t r  m  a n     ";
 * let result = removeSpaces(title);
 * @param {String} value - The String!.
 * @param {String} replaced - Value to replace.
 * @return {String} - String without spaces.
 */

var removeSpaces = function removeSpaces(value) {
    var replaced = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
    return replace(value, '\\s+', replaced);
};

exports.removeSpaces = removeSpaces;

/**
 * Replace all ocurrences of 'search' value to 'newvalue'.

 * var replace = require('strman').replace;
 * let title = "superman";
 * let result = replace(title, 'upe', 't');
 * @param {String} value - The String!.
 * @param {String} search - String to search.
 * @param {String} newvalue - String to replace.
 * @param {Boolean = true} caseSensitive - if you use caseSensitive replace.
 * @param {Boolean = true} multiline - if you use multiline replace.
 * @return {String} - String replaced with 'newvalue'.
 */

var replace = function replace(value) {
    var search = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
    var newvalue = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];
    var caseSensitive = arguments.length <= 3 || arguments[3] === undefined ? true : arguments[3];
    var multiline = arguments.length <= 4 || arguments[4] === undefined ? true : arguments[4];

    var flags = caseSensitive ? 'g' : 'gi';

    multiline ? flags + 'm' : flags;

    return value.replace(new RegExp(search, flags), newvalue);
};

exports.replace = replace;

/**
 * Remove all non valid characters. Example: change á => a or ẽ => e.
 * @playground
 * var transliterate = require('strman').transliterate;
 * let title = "strmáñ";
 * let result = transliterate(title);
 * @param {String} value - The String!.
 * @return {String} - String without non valid characters.
 */

var transliterate = function transliterate(value) {
    var _loop = function _loop(key) {
        _ascii.ascii[key].map(function (char) {
            return value = replace(value, char, key);
        });
    };

    for (var key in _ascii.ascii) {
        _loop(key);
    }
    return value;
};

exports.transliterate = transliterate;

/**
 * Append Strings on Value with spreaded arguments
 * @param {String} value Initial value
 * @param {String} appends Spreaded array with strings to append
 * @return {String} The concatenated string
 * @playground
 * var strman = require('strman')
 *
 * let title = 's'
 * strman.append(title, 'tr', 'm', 'an') // returns 'strman'
 */

var append = function append(value) {
    for (var _len = arguments.length, appends = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        appends[_key - 1] = arguments[_key];
    }

    return appendArray(value, appends);
};

exports.append = append;

/**
 * Append Array of Strings on Value
 * @param {String} value String initial
 * @param {String[]} append Array with strings to append
 * @return {String} The concatenated string
 * @playground
 * var strman = require('strman')
 *
 * let s = 's'
 * strman.appendArray(s, ['tr', 'm', 'an']) // returns 'strman'
 */

var appendArray = function appendArray(value) {
    var appends = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];


    if (length(appends) === 0) {
        return value;
    }

    return value + appends.join('');
};

exports.appendArray = appendArray;

/**
 * Get the character at index
 * @param {String} value The input string
 * @param {Number} index The index for which to extract the character
 * @return {String} The character at position index
 * @playground
 * var strman = require('strman')
 *
 * let title = 'abc'
 * strman.at(title, 1) // returns 'b'
 */

var at = function at(value, index) {
    return substr(value, index, 1);
};

exports.at = at;

/**
 * Returns array with strings between [start] and [end]
 * @param {String} value Input string
 * @param {String} start The start string to look for
 * @param {String} end The end string to look for
 * @return {String[]} An array with all the matches between a pair of `start` and `end`
 * @playground
 * var strman = require('strman')
 *
 * let title = '[abc][def]'
 * strman.between(title, '[', ']') // returns ['abc', 'def']
 */

var between = function between(value, start, end) {
    return (0, _array._pop)(split(value, end).map(function (text) {
        return substr(text, indexOf(text, start) + length(start));
    }));
};

exports.between = between;

/**
 * Returns an array consisting of the characters in the string.
 * @param {String} value The input string
 * @returns {String[]} The array with the single characters of `value`
 * @playground
 * var strman = require('strman')
 *
 * let title = 'abc'
 * strman.chars(title) // returns ['a', 'b', 'c']
 */

var chars = function chars(value) {
    return value.split('');
};

exports.chars = chars;

/**
 * Replaces consecutive whitespace characters with a single space
 * @param {String} value The input string
 * @return {String} The whitespace collapsed string
 * @playground
 * var strman = require('strman')
 *
 * let title = '  a  b  c  '
 * strman.collapseWhitespace(title) // returns 'a b c'
 */

var collapseWhitespace = function collapseWhitespace(value) {
    return trim(replace(value, '\\s\\s+', ' '));
};

exports.collapseWhitespace = collapseWhitespace;

/**
 * Remove all non word characters.
 * @playground
 * var removeNonWords = require('strman').removeNonWords;
 * let title = "__strman../";
 * let result = removeNonWords(title);
 * @param {String} value - The String!.
 * @param {String} replaced - Value to replace.
 * @return {String} - String without non word characters.
 */

var removeNonWords = function removeNonWords(value) {
    var replaced = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
    return replace(value, '[^\\w]+', replaced);
};

exports.removeNonWords = removeNonWords;

/**
 * Verifies that the needle is contained in value
 * @param {String} value The input string
 * @param {String} needle The string which is checked to be contained within `value`
 * @param {Boolean} [caseSensitive=true] Use case (in-)sensitive matching
 * @return {Boolean} True if `needle` is contained
 * @playground
 * var strman = require('strman')
 *
 * let title = 'Daniel Leite'
 * let needle = 'leite'
 * strman.contains(title, needle, false) // returns true
 */

var contains = function contains(value, needle) {
    var caseSensitive = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];
    return indexOf(value, needle, 0, caseSensitive) > -1;
};

exports.contains = contains;

/**
 * Verifies that all needles are contained in value
 * @param {String} value The input string
 * @param {String[]} needles An array of strings which are checked to be contained within `value`
 * @param {Boolean} [caseSensitive=true] Use case (in-)sensitive matching
 * @return {Boolean} True if all `needles` are contained
 * @playground
 * var strman = require('strman')
 *
 * let title = 'Daniel Leite'
 * let needles = ['Leite', 'Daniel']
 * strman.containsAll(title, needles) // returns true
 */

var containsAll = function containsAll(value, needles) {
    var caseSensitive = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];
    return length(needles) > 0 ? needles.reduce(function (previous, current) {
        return !contains(value, current, caseSensitive) ? false : previous && true;
    }, true) : false;
};

exports.containsAll = containsAll;

/**
 * Verifies that one or more of needles are contained in value
 * @param {String} value The input string
 * @param {String[]} needles An array of string which are checked to be contained within `value`
 * @param {Boolean} [caseSensitive=true] Use case (in-)sensitive matching
 * @return {Boolean} True if at least one of `needles` is contained
 * @playground
 * var strman = require('strman')
 *
 * let title = 'Daniel Leite'
 * let needles = ['Leite', 'Oliveira']
 * strman.containsAny(title, needles) // returns true
 */

var containsAny = function containsAny(value, needles) {
    var caseSensitive = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];
    return needles.reduce(function (previous, current) {
        return contains(value, current, caseSensitive) ? true : previous;
    }, false);
};

exports.containsAny = containsAny;

/**
 * Polyfill to countSubstr function
 * @private
 * @param value,
 * @param substr,
 * @param position = 0,
 * @param count = 0,
 * @param allowOverlapping = false
 * @return integer
 */

var _countSubstring = function _countSubstring(value, _substr) {
    var allowOverlapping = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
    var position = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];
    var count = arguments.length <= 4 || arguments[4] === undefined ? 0 : arguments[4];


    var _position = indexOf(value, _substr, position);

    if (_position === -1) {
        return count;
    }

    if (!allowOverlapping) {
        _position = _position + length(_substr) - 1;
    }

    return _countSubstring(value, _substr, allowOverlapping, _position + 1, count + 1);
};

/**
 * Count the number of times substr appears in value
 * @param {String} value The input string
 * @param {String} substr The substring to look for
 * @param {Boolean} [caseSensitive=true] Use case (in-)sensitive matching
 * @param {Boolean} [allowOverlapping=false] Allow overlapping substrings to be counted
 * @return {Number} The number of matches
 * @playground
 * var strman = require('strman')
 *
 * let title = 'Daniel Leite'
 * let substr = 'Leite'
 * strman.counSubstr(title, substr) // returns 1
 */
var countSubstr = function countSubstr(value, _substr) {
    var caseSensitive = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];
    var allowOverlapping = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];
    return _countSubstring((0, _case.toCaseSensitive)(value, caseSensitive), (0, _case.toCaseSensitive)(_substr, caseSensitive), allowOverlapping);
};

exports.countSubstr = countSubstr;

/**
 * Test if `value` ends with `search`
 * @param {String} value The input string
 * @param {String} search The string to search for
 * @param {?Number} [position] The start position/index within `value` to start searching
 * @param {Boolean} [caseSensitive=true] Use case (in-)sensitive matching
 * @return {Boolean} True if `input` ends with `search`
 * @playground
 * var strman = require('strman')
 *
 * let value = 'Daniel Leite'
 * let search = 'Leite'
 * strman.endsWith(value, search) // returns true
 */

var endsWith = function endsWith(value, search) {
    var position = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
    var caseSensitive = arguments.length <= 3 || arguments[3] === undefined ? true : arguments[3];


    if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > length(value)) {
        position = length(value);
    }

    position -= length(search);

    var lastIndex = indexOf((0, _case.toCaseSensitive)(value, caseSensitive), (0, _case.toCaseSensitive)(search, caseSensitive), position);

    return lastIndex !== -1 && lastIndex === position;
};

exports.endsWith = endsWith;

/**
 * Test if 'value' starts with 'search'
 * @playground
 * var startsWith = require('strman').startsWith;
 * let title = "strman";
 * let result = startsWith(title, 'str');
 * @param {String} value - The String!.
 * @param {String} search - Value to search.
 * @param {Number = 0} position - offset to search.
 * @param {Boolean = true} caseSensitive - if you use caseSensitive to test.
 * @return {Boolean} - If 'value' startsWith 'search' return true, else false.
 */

var startsWith = function startsWith(value, search) {
    var position = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
    var caseSensitive = arguments.length <= 3 || arguments[3] === undefined ? true : arguments[3];
    return substr((0, _case.toCaseSensitive)(value, caseSensitive), position, length(search)) === (0, _case.toCaseSensitive)(search, caseSensitive);
};

exports.startsWith = startsWith;

/**
 * Ensures that the `value` begins with `substr`. If it doesn't, it's prepended.
 * @param {String} value The input string
 * @param {String} substr The substr to be ensured to be left
 * @param {Boolean} [caseSensitive=true] Use case (in-)sensitive matching for determining if `value` already starts with `substr`
 * @return {String} The string which is guarenteed to start with `substr`
 * @playground
 * var strman = require('strman')
 *
 * let value = 'Leite'
 * let substr = 'Daniel '
 * strman.ensureLeft(value, substr) // returns 'Daniel Leite'
 */

var ensureLeft = function ensureLeft(value, _substr) {
    var caseSensitive = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];

    if (!startsWith(value, _substr, 0, caseSensitive)) {
        return append(_substr, value);
    }

    return value;
};

exports.ensureLeft = ensureLeft;

/**
 * Ensures that the [value] ends with [substr]. If it doesn't, it's appended.
 * @param {String} value The input string
 * @param {String} substr The substr to be ensured to be right
 * @param {Boolean} [caseSensitive=true] Use case (in-)sensitive matching for determining if `value` already ends with `substr`
 * @return {String} The string which is guarenteed to start with `substr`
 * @playground
 * var strman = require('strman')
 *
 * let value = 'Daniel'
 * let substr = ' Leite'
 * strman.ensureRight(value, substr) // returns 'Daniel Leite'
 */

var ensureRight = function ensureRight(value, _substr) {
    var caseSensitive = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];
    return !endsWith(value, _substr, null, caseSensitive) ? append(value, _substr) : value;
};

exports.ensureRight = ensureRight;

/**
* Return the first 'n' chars of string.
* @playground
* var first = require('strman').first;
* let title = "strman";
* let result = first(title, 3);
* @param {String} value - The String!.
* @param {String} n - Number of chars to return.
* @return {String} - Return 'n' firsts chars.
*/

var first = function first(value, n) {
    return substr(value, 0, n);
};

exports.first = first;

/**
 * Return the last 'n' chars of string.
 * @playground
 * var last = require('strman').last;
 * let title = "strman";
 * let result = last(title, 3);
 * @param {String} value - The String!.
 * @param {String} n - Number of chars to return.
 * @return {String} - Return 'n' lasts chars.
 */

var last = function last(value, n) {
    return substr(value, -1 * n, n);
};

exports.last = last;

/**
 * The indexOf() method returns the index within the calling String of the first occurrence
 * of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
 * @playground
 * var indexOf = require('strman').indexOf;
 * let title = "strman";
 * let result = indexOf(title, 'man');
 * @param {String} value - The String!.
 * @param {String} needle - Value to search.
 * @param {Number = 0} offset - Offset to search.
 * @param {Boolean = true} caseSensitive - if you use caseSensitive to test.
 * @return {Number} - Return position of the first occurrence of 'needle'.
 */

var indexOf = function indexOf(value, needle) {
    var offset = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
    var caseSensitive = arguments.length <= 3 || arguments[3] === undefined ? true : arguments[3];
    return (0, _case.toCaseSensitive)(value, caseSensitive).indexOf((0, _case.toCaseSensitive)(needle, caseSensitive), offset);
};

exports.indexOf = indexOf;

/**
 * The lastIndexOf() method returns the index within the calling String object of the last
 * occurrence of the specified value, searching backwards from fromIndex. Returns -1 if the
 * value is not found.
 * @playground
 * var lastIndexOf = require('strman').lastIndexOf;
 * let title = "strman strman";
 * let result = lastIndexOf(title, 'str');
 * @param {String} value - The String!.
 * @param {String} needle - Value to search.
 * @param {Number = undefined} offset - Offset to search.
 * @param {Boolean = true} caseSensitive - if you use caseSensitive to test.
 * @return {Number} - Return position of the last occurrence of 'needle'.
 */

var lastIndexOf = function lastIndexOf(value, needle) {
    var offset = arguments.length <= 2 || arguments[2] === undefined ? undefined : arguments[2];
    var caseSensitive = arguments.length <= 3 || arguments[3] === undefined ? true : arguments[3];
    return (0, _case.toCaseSensitive)(value, caseSensitive).lastIndexOf((0, _case.toCaseSensitive)(needle, caseSensitive), offset);
};

exports.lastIndexOf = lastIndexOf;

/**
 * Inserts 'substr' into the 'value' at the 'index' provided.
 * @playground
 * var insert = require('strman').insert;
 * let title = "trman";
 * let result = insert(title, 's', 0);
 * @param {String} value - The String!.
 * @param {String} _substr - Value to insert.
 * @param {Number} index - Index to insert substr.
 * @return {String} - String with substr added.
 */

var insert = function insert(value, _substr, index) {

    var start = null;
    var end = null;

    if (index > length(value)) {
        return value;
    }

    start = substr(value, 0, index);
    end = substr(value, index, length(value));

    return append(start, _substr, end);
};

exports.insert = insert;

/**
 * Returns the length of the string.
 * @playground
 * var length = require('strman').length;
 * let title = "strman";
 * let result = length(title);
 * @param {String} value - The String!.
 * @return {Number} - Length of the string..
 */

var length = function length(value) {
    return value.length;
};

exports.length = length;

/**
 * Returns a new string of a given length such that the beginning of the string is padded.
 * @playground
 * var leftPad = require('strman').leftPad;
 * let title = "strman";
 * let result = leftPad(title, 10, 0);
 * @param {String} value - The String!.
 * @param {Number} _length - Max length of String.
 * @param {Char} char - Char to repeat.
 * @return {String} - String pad.
 */

var leftPad = function leftPad(value, _length) {
    var char = arguments.length <= 2 || arguments[2] === undefined ? ' ' : arguments[2];


    var result = value;
    char = String(char);

    if (length(char) > 1) {
        char = substr(char, 0, 1);
    }

    _length = _length - length(value);

    result = append(repeat(char, _length), result);

    return result;
};

exports.leftPad = leftPad;

/**
 * Returns a new string of a given length such that the ending of the string is padded.
 * @playground
 * var rightPad = require('strman').rightPad;
 * let title = "strman";
 * let result = rightPad(title, 10, 0);
 * @param {String} value - The String!.
 * @param {Number} _length - Max length of String.
 * @param {Char} char - Char to repeat.
 * @return {String} - String pad.
 */

var rightPad = function rightPad(value, _length) {
    var char = arguments.length <= 2 || arguments[2] === undefined ? ' ' : arguments[2];


    var result = value;
    char = String(char);

    if (length(char) > 1) {
        char = substr(char, 0, 1);
    }

    _length = _length - length(value);

    result = append(result, repeat(char, _length));

    return result;
};

exports.rightPad = rightPad;

/**
 * Alias to substr function.
 * @playground
 * var substr = require('strman').substr;
 * let title = "strman";
 * let result = substr(title, 0, 3);
 * @param {String} value - The String!.
 * @param {Number} start - Substring starts.
 * @param {Number} _length - Substring length.
 * @return {String} - The Substring!
 */

var substr = function substr(value, start) {
    var _length = arguments.length <= 2 || arguments[2] === undefined ? undefined : arguments[2];

    return value.substr(start, _length);
};

exports.substr = substr;

/**
 * Alias to split function.
 * @playground
 * var split = require('strman').split;
 * let title = "strman";
 * let result = split(title, '');
 * @param {String} value - The String!.
 * @param {String} separator - Split separator.
 * @param {Number = undefined} limit - Split limit.
 * @return {String} - The String splited!
 */

var split = function split(value, separator) {
    var limit = arguments.length <= 2 || arguments[2] === undefined ? undefined : arguments[2];
    return value.split(separator, limit);
};

exports.split = split;

/**
* Returns a new string starting with 'prepends'.
* @playground
* var prepend = require('strman').prepend;
* let title = "strman";
* let result = prepend(title, '_');
* @param {String} value - The String!.
* @param {...String} prepends - Strings to prepend.
* @return {String} - The String prepended!
*/

var prepend = function prepend(value) {
    for (var _len2 = arguments.length, prepends = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        prepends[_key2 - 1] = arguments[_key2];
    }

    return prependArray(value, prepends);
};

exports.prepend = prepend;

/**
* Returns a new string starting with 'prepends'.
* @playground
* var prependArray = require('strman').prependArray;
* let title = "strman";
* let result = prependArray(title, '_');
* @param {String} value - The String!.
* @param {String[]} prepends - Strings to prepend.
* @return {String} - The String prepended!
*/

var prependArray = function prependArray(value) {
    var prepends = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];


    if (length(prepends) === 0) {
        return value;
    }

    return prepends.join('') + value;
};

exports.prependArray = prependArray;

/**
* Returns a new string with the 'prefix' removed, if present.
* @playground
* var removeLeft = require('strman').removeLeft;
* let title = "strman";
* let result = removeLeft(title, 'str');
* @param {String} value - The String!.
* @param {String} prefix - String to remove on left.
* @param {Boolean = true} caseSensitive - If you need to caseSensitive.
* @return {String} - The String without prefix!
*/

var removeLeft = function removeLeft(value, prefix) {
    var caseSensitive = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];


    if (startsWith(value, prefix, 0, caseSensitive)) {
        return substr(value, length(prefix));
    }

    return value;
};

exports.removeLeft = removeLeft;

/**
 * Returns a new string with the 'suffix' removed, if present.
 * @playground
 * var removeRight = require('strman').removeRight;
 * let title = "strman";
 * let result = removeRight(title, 'man');
 * @param {String} value - The String!.
 * @param {String} suffix - String to remove on right.
 * @param {Boolean = true} caseSensitive - If you need to caseSensitive.
 * @return {String} - The String without suffix!
 */

var removeRight = function removeRight(value, suffix) {
    var caseSensitive = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];

    var _length = length(value) - length(suffix);

    if (endsWith(value, suffix, null, caseSensitive)) {
        return substr(value, 0, _length);
    }

    return value;
};

exports.removeRight = removeRight;

/**
 * Returns a repeated string given a multiplier.
 * @playground
 * var repeat = require('strman').repeat;
 * let title = "strman";
 * let result = repeat(title, 5);
 * @param {String} value - The String!.
 * @param {Number} multiplier - Number of repeats.
 * @return {String} - The String repeated!
 */

var repeat = function repeat(value, multiplier) {
    var i = 0;
    var result = '';
    while (multiplier > i++) {
        result += value;
    }
    return result;
};

exports.repeat = repeat;

/**
 * Returns a reversed string.
 * @playground
 * var reverse = require('strman').reverse;
 * let title = "strman";
 * let result = reverse(title);
 * @param {String} value - The String!.
 * @return {String} - The String reversed!
 */

var reverse = function reverse(value) {
    return split(value, '').reduceRight(function (previous, current) {
        return append(previous, current);
    }, '');
};

exports.reverse = reverse;

/**
 * It returns a array with its values in random order.
 * @private
 * @param {Array} value - The array!.
 * @return {Array} - The Array shuffled!
*/

var _shuffle = function _shuffle(array) {
    var j = void 0;
    var x = void 0;
    var i = void 0;
    for (i = length(array); i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = array[i - 1];
        array[i - 1] = array[j];
        array[j] = x;
    }
    return array;
};

/**
 * It returns a string with its characters in random order.
 * @playground
 * var shuffle = require('strman').shuffle;
 * let title = "strman";
 * let result = shuffle(title);
 * @param {String} value - The String!.
 * @return {String} - The String shuffled!
 */
var shuffle = function shuffle(value) {
    return _shuffle(split(value)).join('');
};

exports.shuffle = shuffle;

/**
* Surrounds a 'value' with the given 'substr'.
* @playground
* var surround = require('strman').surround;
* let title = "strman";
* let result = surround(title, '<', '>');
* @param {String} value - The String!.
* @param {String = ''} _substr - The substr to append on left, if substrRight is null, this is appended in right.
* @param {String = null} _substrRight - The substr to append on right.
* @return {String} - The String with surround substrs!
*/

var surround = function surround(value) {
    var _substr = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

    var _substrRight = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

    return append(_substr, value, _substrRight === null ? _substr : _substrRight);
};

exports.surround = surround;

/**
 * Alias to slice method.
 * @playground
 * var slice = require('strman').slice;
 * let title = "strman";
 * let result = slice(title, 2, 5);
 * @param {String} value - The String!.
 * @param {Number} beginSlice - Start of slice.
 * @param {Number} endSlice - End of slice.
 * @return {String} - The String sliced!
 */

var slice = function slice(value, beginSlice) {
    var endSlice = arguments.length <= 2 || arguments[2] === undefined ? undefined : arguments[2];
    return value.slice(beginSlice, endSlice);
};

exports.slice = slice;

/**
 * Truncate the string securely, not cutting a word in half. It always returns the last full word.
 * @playground
 * var safeTruncate = require('strman').safeTruncate;
 * let title = "A Javascript string manipulation library.";
 * let result = safeTruncate(title, 15, '...');
 * @param {String} value - Value will be truncated securely.
 * @param {Number} _length - Max size of the returned string.
 * @param {String} [_append = ''] - Value that will be added to the end of the return string. Example: '...'
 * @returns {String} - String truncated safely.
 */

var safeTruncate = function safeTruncate(value, _length) {
    var _append = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];

    var truncated = '';

    if (_length === 0) {
        return '';
    }

    if (_length >= length(value)) {
        return value;
    }

    _length -= length(_append);
    truncated = substr(value, 0, _length);

    var position = indexOf(value, ' ', _length - 1);

    if (position !== _length) {
        var lastPos = lastIndexOf(truncated, ' ');
        truncated = substr(truncated, 0, lastPos);
    }

    return append(truncated, _append);
};

exports.safeTruncate = safeTruncate;

/**
 * Truncate the unsecured form string, cutting the independent string of required position.
 * @playground
 * var truncate = require('strman').truncate;
 * let title = "A Javascript string manipulation library.";
 * let result = truncate(title, 16, '...');
 * @param {String} value - Value will be truncated unsecurely.
 * @param {Number} _length - Size of the returned string.
 * @param {String} [_append = ''] - Value that will be added to the end of the return string. Example: '...'
 * @returns {String} - String truncated unsafely.
 */

var truncate = function truncate(value, _length) {
    var _append = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];

    var truncated = '';

    if (_length === 0) {
        return '';
    }

    if (_length >= length(value)) {
        return value;
    }

    _length -= length(_append);
    truncated = substr(value, 0, _length);

    return append(truncated, _append);
};

exports.truncate = truncate;

/**
 * Remove empty strings from strings array.
 * @playground
 * var removeEmptyStrings = require('strman').removeEmptyStrings;
 * let titles = ["A Javascript string manipulation library.", null, undefined, '', ' '];
 * let result = removeEmptyStrings(titles);
 * @param {String[]} strings - Array of strings that will be cleaned.
 * @returns {String[]} - Array of strings without empty strings.
 */

var removeEmptyStrings = function removeEmptyStrings(strings) {
    return strings.filter(function (string) {
        return string && string !== '';
    });
};

exports.removeEmptyStrings = removeEmptyStrings;

/**
 * Formats a string using parameters.
 * @playground
 * var format = require('strman').format;
 * let select = "SELECT * FROM CONTACTS WHERE NAME LIKE '%{0}%' AND EMAIL LIKE '%{1}%'";
 * let result = format(select, "DANIEL", "GMAIL");
 * @param {String} value - Value that will be formatted.
 * @param {String[]} params - Array with the parameters described in the string.
 * @returns {String} - Formatted string.
 */

var format = function format(value) {
    var params = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
    return replace(value, '{(\\w+)}', function (match, index) {
        return _typeof(params[index]) !== undefined ? params[index] : match;
    });
};

exports.format = format;

/**
 * Compares two strings to each other. If they are equivalent, a zero is returned. Otherwise,
 * most of these routines will return a positive or negative result corresponding to whether stringA
 * is lexicographically greater than, or less than, respectively, than stringB.
 * @playground
 * var compare = require('strman').compare;
 * let result = compare("foo", "bar");
 * @param {String} stringA - String for the comparative
 * @param {String} stringB - String to be compared
 * @returns {Number} - +1 if [stringA] > [stringB], -1 if [stringA] < [stringB] and 0 if [stringA] = [stringB]
 */

var compare = function compare(stringA, stringB) {
    if (equal(stringA, stringB)) {
        return 0;
    }

    return stringA > stringB ? 1 : -1;
};

exports.compare = compare;

/**
 * Tests if two strings are equal.
 * @playground
 * var equal = require('strman').equal;
 * let result = equal("foo", "foo");
 * @param {String} stringA - String for the comparative
 * @param {String} stringB - String to be compared
 * @returns {Boolean} - [stringA] is equal [stringB]
 */

var equal = function equal(stringA, stringB) {
    return stringA === stringB;
};

exports.equal = equal;

/**
 * Tests if two strings are inequal.
 * @playground
 * var inequal = require('strman').inequal;
 * let result = inequal("foo", "foo");
 * @param {String} stringA - String for the comparative
 * @param {String} stringB - String to be compared
 * @returns {Boolean} - [stringA] is inequal [stringB]
 */

var inequal = function inequal(stringA, stringB) {
    return stringA !== stringB;
};

exports.inequal = inequal;