'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.format = exports.removeEmptyStrings = exports.truncate = exports.safeTruncate = exports.slice = exports.surround = exports.shuffle = exports.reverse = exports.repeat = exports.removeRight = exports.removeLeft = exports.prependArray = exports.prepend = exports.split = exports.substr = exports.rightPad = exports.leftPad = exports.length = exports.insert = exports.lastIndexOf = exports.indexOf = exports.last = exports.first = exports.ensureRight = exports.ensureLeft = exports.startsWith = exports.endsWith = exports.countSubstr = exports.containsAny = exports.containsAll = exports.contains = exports.removeNonWords = exports.collapseWhitespace = exports.chars = exports.between = exports.at = exports.appendArray = exports.append = exports.removeNonChars = exports.transliterate = exports.replace = exports.removeSpaces = exports.rightTrim = exports.leftTrim = exports.trim = exports.isString = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _ascii = require('./lib/ascii');

var _array = require('./lib/array');

var _validate = require('./lib/validate');

var _string = require('./string.cases');

/*
 * Checks whether a string
 * @param value - value to check
 * @return Boolean - true or false
 */
var isString = function isString(value) {
    return Object.prototype.toString.call(value) === '[object String]';
};

exports.isString = isString;

/*
 * Remove all spaces on left and right
 * @params value - String to trim
 * @return String without boarders spaces
 */

var trim = function trim(value) {
    var char = arguments.length <= 1 || arguments[1] === undefined ? ' ' : arguments[1];
    return leftTrim(rightTrim(value, char), char);
};

exports.trim = trim;

/*
 * Remove spaces left
 * @params value
 * @return string
 */

var leftTrim = function leftTrim(value) {
    var char = arguments.length <= 1 || arguments[1] === undefined ? ' ' : arguments[1];
    return replace(value, '^' + char + '+', '');
};

exports.leftTrim = leftTrim;

/*
 * Remove spaces right
 * @params value
 * @return string
 */

var rightTrim = function rightTrim(value) {
    var char = arguments.length <= 1 || arguments[1] === undefined ? ' ' : arguments[1];
    return replace(value, char + '+$', '');
};

exports.rightTrim = rightTrim;

/*
 * Remove all spaces and replace for value
 * @param replace - Value to replace
 * @param value - The string being searched and replaced on.
 * @return String without spaces
 */

var removeSpaces = function removeSpaces(value) {
    var replaced = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
    return replace(value, '\\s+', replaced);
};

exports.removeSpaces = removeSpaces;

/*
 * Replace [search] value to [newvalue]
 * @param search - String to search
 * @param newvalue - String to replace
 * @params value - The string being searched and replaced on.
 * @return String replaced
 */

var replace = function replace(value) {
    var search = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
    var newvalue = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];
    var caseSensitive = arguments.length <= 3 || arguments[3] === undefined ? true : arguments[3];

    var flags = caseSensitive ? 'g' : 'gi';

    return value.replace(new RegExp(search, flags), newvalue);
};

exports.replace = replace;

/*
 * Remove all non valid characters
 * Example: change á => a or ẽ => e
 * @params value - The string being searched and replaced on.
 * @return String without non valid characters.
 */

var transliterate = function transliterate(value) {
    var result = value;
    for (var key in _ascii.ascii) {
        for (var char in _ascii.ascii[key]) {
            result = replace(result, _ascii.ascii[key][char], key);
        }
    }
    return result;
};

exports.transliterate = transliterate;

/*
 * @deprecated Since version 1.0.1. Will be deleted in version 1.2.0. Use transliterate instead.
 * Remove all non valid characters
 * Example: change á => a or ẽ => e
 * @params value - The string being searched and replaced on.
 * @return String without non valid characters.
 */

var removeNonChars = transliterate;

exports.removeNonChars = removeNonChars;

/*
 * Append Strings on Value
 * @param value String initial
 * @param ...append - array with strings to append
 * @return string
 */

var append = function append(value) {
    for (var _len = arguments.length, appends = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        appends[_key - 1] = arguments[_key];
    }

    (0, _validate.validString)(value);
    (0, _validate.validArrayString)(appends);

    if (length(appends) === 0) {
        return value;
    }

    return value + appends.join('');
};

exports.append = append;

/*
 * Append Array of Strings on Value
 * @param value String initial
 * @param ...append - array with strings to append
 * @return string
 */

var appendArray = function appendArray(value) {
    var appends = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];


    (0, _validate.validString)(value);
    (0, _validate.validArrayString)(appends);

    if (length(appends) === 0) {
        return value;
    }

    return value + appends.join('');
};

exports.appendArray = appendArray;

/*
 * Get the character at index
 * @param value
 * @param index
 * @return char
 */

var at = function at(value, index) {
    (0, _validate.validString)(value);
    (0, _validate.validNumber)(index);

    return substr(value, index, 1);
};

exports.at = at;

/*
 * Returns array with strings between [start] and [end]
 * @param value
 * @param start
 * @param end
 * @return Array
 */

var between = function between(value, start, end) {

    var result = null;

    (0, _validate.validArrayString)([value, start, end]);

    result = split(value, end);

    result = result.map(function (text) {
        return substr(text, indexOf(text, start) + length(start));
    });

    result = (0, _array._pop)(result);

    return result;
};

exports.between = between;

/*
 * Returns an array consisting of the characters in the string.
 * @params value
 * @returns Array
 */

var chars = function chars(value) {
    var _chars = [];

    (0, _validate.validString)(value);

    for (var i = 0; i < length(value); i++) {
        _chars[i] = at(value, i);
    }
    return _chars;
};

exports.chars = chars;

/*
 * Replaces consecutive whitespace characters with a single space
 * @param string
 * @return string
 */

var collapseWhitespace = function collapseWhitespace(value) {
    return trim(replace(value, '\\s\\s+', ' '));
};

exports.collapseWhitespace = collapseWhitespace;

/*
 * Remove all non word characters
 * Example: change . => [replace]
 * @paramsClojure replace - Value to replace
 * @params value - The string being searched and replaced on.
 * @return String without non word characters.
 */

var removeNonWords = function removeNonWords(value) {
    var replaced = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
    return replace(value, '[^\\w]+', replaced);
};

exports.removeNonWords = removeNonWords;

/*
 * Verifies that the needle is contained in value
 * @param value
 * @param needle
 * @param caseSensitive - default true
 * @return boolean
 */

var contains = function contains(value, needle) {
    var caseSensitive = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];


    if (caseSensitive) {
        return indexOf(value, needle) > -1;
    }

    return indexOf((0, _string.toUpperCase)(value), (0, _string.toUpperCase)(needle)) > -1;
};

exports.contains = contains;

/*
 * Verifies that all needles are contained in value
 * @param value
 * @param needle
 * @param caseSensitive - default true
 * @return boolean
 */

var containsAll = function containsAll(value, needles) {
    var caseSensitive = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];


    if (length(needles) === 0) {
        return false;
    }

    for (var i = 0; i < length(needles); i++) {
        if (!contains(value, needles[i], caseSensitive)) {
            return false;
        }
    }
    return true;
};

exports.containsAll = containsAll;

/*
 * Verifies that one or more of needles are contained in value
 * @param value
 * @param needle
 * @param caseSensitive - default true
 * @return boolean
 */

var containsAny = function containsAny(value, needles) {
    var caseSensitive = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];

    for (var i = 0; i < length(needles); i++) {
        if (contains(value, needles[i], caseSensitive)) {
            return true;
        }
    }
    return false;
};

exports.containsAny = containsAny;

/*
 * Polyfill to countSubstr function
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

/*
 * Count the number of times substr appears in value
 * @param value,
 * @param substr,
 * @param caseSensitive = true,
 * @param allowOverlapping = false
 * @return integer
 */
var countSubstr = function countSubstr(value, _substr) {
    var caseSensitive = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];
    var allowOverlapping = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];


    if (!caseSensitive) {
        value = (0, _string.toUpperCase)(value);
        _substr = (0, _string.toUpperCase)(_substr);
    }

    return _countSubstring(value, _substr, allowOverlapping);
};

exports.countSubstr = countSubstr;

/*
 * Test if [value] ends with [search]
 * @param value
 * @param search
 * @param position = null
 * @return boolean
 */

var endsWith = function endsWith(value, search) {
    var position = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
    var caseSensitive = arguments.length <= 3 || arguments[3] === undefined ? true : arguments[3];


    var lastIndex = null;

    if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > length(value)) {
        position = length(value);
    }

    position -= length(search);

    if (caseSensitive) {
        lastIndex = indexOf(value, search, position);
    } else {
        lastIndex = indexOf((0, _string.toUpperCase)(value), (0, _string.toUpperCase)(search), position);
    }

    return lastIndex !== -1 && lastIndex === position;
};

exports.endsWith = endsWith;

/*
 * Test if [value] starts with [search]
 * @param value
 * @param search
 * @param position = null
 * @return boolean
 */

var startsWith = function startsWith(value, search) {
    var position = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
    var caseSensitive = arguments.length <= 3 || arguments[3] === undefined ? true : arguments[3];


    if (caseSensitive) {
        return substr(value, position, length(search)) === search;
    }

    return substr((0, _string.toUpperCase)(value), position, length(search)) === (0, _string.toUpperCase)(search);
};

exports.startsWith = startsWith;

/*
 * Ensures that the [value] begins with [substr]. If it doesn't, it's prepended.
 * @param value
 * @param substr
 * @return string
 */

var ensureLeft = function ensureLeft(value, _substr) {
    var caseSensitive = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];

    if (!startsWith(value, _substr, 0, caseSensitive)) {
        return append(_substr, value);
    }

    return value;
};

exports.ensureLeft = ensureLeft;

/*
 * Ensures that the [value] ends with [substr]. If it doesn't, it's appended.
 * @param value
 * @param substr
 * @return string
 */

var ensureRight = function ensureRight(value, _substr) {
    var caseSensitive = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];


    if (!endsWith(value, _substr, null, caseSensitive)) {
        return append(value, _substr);
    }

    return value;
};

exports.ensureRight = ensureRight;

/*
 * Return the first n chars of string.
 * @param value
 * @param n
 * @return string
 */

var first = function first(value, n) {
    return substr(value, 0, n);
};

exports.first = first;

/*
 * Return the last n chars of string.
 * @param value
 * @param n
 * @return string
 */

var last = function last(value, n) {
    return substr(value, -1 * n, n);
};

exports.last = last;

/*
 * The indexOf() method returns the index within the calling String object of the first occurrence
 * of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
 *
 * @param value
 * @param needle
 * @param offset
 * @return integer
 */

var indexOf = function indexOf(value, needle) {
    var offset = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
    var caseSensitive = arguments.length <= 3 || arguments[3] === undefined ? true : arguments[3];

    if (caseSensitive) {
        return value.indexOf(needle, offset);
    }

    return (0, _string.toUpperCase)(value).indexOf((0, _string.toUpperCase)(needle), offset);
};

exports.indexOf = indexOf;

/*
 * The lastIndexOf() method returns the index within the calling String object of the last
 * occurrence of the specified value, searching backwards from fromIndex. Returns -1 if the
 * value is not found.
 *
 * @param value
 * @param needle
 * @param offset
 * @return integer
 */

var lastIndexOf = function lastIndexOf(value, needle) {
    var offset = arguments.length <= 2 || arguments[2] === undefined ? undefined : arguments[2];
    var caseSensitive = arguments.length <= 3 || arguments[3] === undefined ? true : arguments[3];

    if (caseSensitive) {
        return value.lastIndexOf(needle, offset);
    }
    return (0, _string.toUpperCase)(value).lastIndexOf((0, _string.toUpperCase)(needle), offset);
};

exports.lastIndexOf = lastIndexOf;

/*
 * Inserts [substr] into the [value] at the [index] provided.
 * @param value
 * @param substr
 * @param index
 * @return string
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

/*
 * Returns the length of the string
 * @param value
 * @return integer
 */

var length = function length(value) {
    var i = 0;
    while (value[i] !== undefined) {
        i++;
    }
    return i;
};

exports.length = length;

/*
 * Returns a new string of a given length such that the beginning of the string is padded.
 * @param value
 * @param length
 * @param char
 * @return string
 */

var leftPad = function leftPad(value, _length) {
    var char = arguments.length <= 2 || arguments[2] === undefined ? ' ' : arguments[2];


    var result = value;
    char = String(char);

    if (length(char) > 1) {
        char = substr(char, 0, 1);
    }

    (0, _validate.validCharLength)(char);

    _length = _length - length(value);

    result = append(repeat(char, _length), result);

    return result;
};

exports.leftPad = leftPad;

/*
 * Returns a new string of a given length such that the ending of the string is padded.
 * @param value
 * @param length
 * @param char
 * @return string
 */

var rightPad = function rightPad(value, _length) {
    var char = arguments.length <= 2 || arguments[2] === undefined ? ' ' : arguments[2];


    var result = value;
    char = String(char);

    if (length(char) > 1) {
        char = substr(char, 0, 1);
    }

    (0, _validate.validCharLength)(char);

    _length = _length - length(value);

    result = append(result, repeat(char, _length));

    return result;
};

exports.rightPad = rightPad;

/*
 * Alias to substr function
 * @param value
 * @param start
 * @param length = undefined
 * @return string
 */

var substr = function substr(value, start) {
    var length = arguments.length <= 2 || arguments[2] === undefined ? undefined : arguments[2];
    return value.substr(start, length);
};

exports.substr = substr;

/*
 * Alias to split function
 * @param value
 * @param separator
 * @param limit = undefined
 * @return string
 */

var split = function split(value, separator) {
    var limit = arguments.length <= 2 || arguments[2] === undefined ? undefined : arguments[2];
    return value.split(separator, limit);
};

exports.split = split;

/*
 * Returns a new string starting with [prepends].
 * @param value
 * @param ...prepends
 * @return string
 */

var prepend = function prepend(value) {
    for (var _len2 = arguments.length, prepends = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        prepends[_key2 - 1] = arguments[_key2];
    }

    (0, _validate.validString)(value);
    (0, _validate.validArrayString)(prepends);

    if (length(prepends) === 0) {
        return value;
    }

    return prepends.join('') + value;
};

exports.prepend = prepend;

/*
 * Returns a new string starting with [prepends].
 * @param value
 * @param ...prepends
 * @return string
 */

var prependArray = function prependArray(value) {
    var prepends = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];


    (0, _validate.validString)(value);
    (0, _validate.validArrayString)(prepends);

    if (length(prepends) === 0) {
        return value;
    }

    return prepends.join('') + value;
};

exports.prependArray = prependArray;

/*
 * Returns a new string with the [prefix] removed, if present.
 * @param value
 * @param prefix
 * @return string
*/

var removeLeft = function removeLeft(value, prefix) {
    var caseSensitive = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];


    if (startsWith(value, prefix, 0, caseSensitive)) {
        return substr(value, length(prefix));
    }

    return value;
};

exports.removeLeft = removeLeft;

/*
 * Returns a new string with the [suffix] removed, if present.
 * @param value
 * @param prefix
 * @return string
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

/*
 * Returns a repeated string given a multiplier.
 * @param value
 * @param multiplier
 * @return string
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

/*
 * Returns a reversed string.
 * @param value
 * @return string
*/

var reverse = function reverse(value) {
    var i = 0;
    var reversed = '';
    while (length(value) > i++) {
        reversed = append(reversed, substr(value, -1 * i, 1));
    }
    return reversed;
};

exports.reverse = reverse;

/*
 * A multibyte str_shuffle() function. It returns a string with its characters in random order.
 * @param value
 * @return string
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

var shuffle = function shuffle(value) {
    return _shuffle(split(value)).join('');
};

exports.shuffle = shuffle;

/*
 * Surrounds a [value] with the given [substr].
 * @param value
 * @param substr
 * @return string
 */

var surround = function surround(value) {
    var _substr = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

    return append(_substr, value, _substr);
};

exports.surround = surround;

/*
 * The slice method extracts a section of a string and returns a new string.
 * @param value
 * @param beginSlice
 * @param endSlice
 * @return string
 */

var slice = function slice(value, beginSlice) {
    var endSlice = arguments.length <= 2 || arguments[2] === undefined ? undefined : arguments[2];
    return value.slice(beginSlice, endSlice);
};

exports.slice = slice;

/*
 * Truncate the string securely, not cutting a word in half. It always returns the last full word.
 * @param value
 * @param _length
 * @param _append = ''
 * @return string
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

    if (_length === indexOf(value, ' ', 0)) {
        return substr(value, 0, _length);
    }

    _length -= length(_append);
    truncated = substr(value, 0, _length);

    var position = indexOf(value, ' ', _length - 1);

    if (position !== _length) {
        var lastPos = lastIndexOf(truncated, ' ', 0);
        truncated = substr(truncated, 0, lastPos);
    }

    return append(truncated, _append);
};

exports.safeTruncate = safeTruncate;

/*
 * Truncate the unsecured form string, cutting the independent string of required position.
* @param value
 * @param _length
 * @param _append = ''
 * @return string
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
 * remove empty string from string array
 * @param strings
 * @return string;
 */

var removeEmptyStrings = function removeEmptyStrings(strings) {
    return strings.filter(function (string) {
        return string && string !== '';
    });
};

exports.removeEmptyStrings = removeEmptyStrings;

/**
 * format a string with params
 * Example:
 * format("SELECT * FROM CONTACTS WHERE NAME LIKE '%{0}%' AND EMAIL LIKE '%{1}%'", "DANIEL", "GMAIL")
 * print "SELECT * FROM CONTACTS WHERE NAME LIKE '%DANIEL%' AND EMAIL LIKE '%GMAIL%'"
 * @param value
 * @param ...params
 * @return string
 */

var format = function format(value) {
    for (var _len3 = arguments.length, params = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        params[_key3 - 1] = arguments[_key3];
    }

    return replace(value, '{(\\d+)}', function (match, number) {
        return _typeof(params[number]) !== undefined ? params[number] : match;
    });
};

exports.format = format;