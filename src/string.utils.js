import {ascii} from './lib/ascii';
import {_pop} from './lib/array';
import {validString, validArrayString, validNumber, validCharLength} from './lib/validate';
import {toUpperCase} from './string.cases';

/*
 * Checks whether a string
 * @param value - value to check
 * @return Boolean - true or false
 */
const isString = value =>
    Object.prototype.toString.call(value) === '[object String]';

export {isString};

/*
 * Remove all spaces on left and right
 * @params value - String to trim
 * @return String without boarders spaces
 */
const trim = value => leftTrim(rightTrim(value));

export {trim};

/*
 * Remove spaces left
 * @params value
 * @return string
 */
const leftTrim = value => replace(value, '^\\s+', '');

export {leftTrim};

/*
 * Remove spaces right
 * @params value
 * @return string
 */
const rightTrim = value => replace(value, '\\s+$', '');

 export {rightTrim};

/*
 * Remove all spaces and replace for value
 * @param replace - Value to replace
 * @param value - The string being searched and replaced on.
 * @return String without spaces
 */
const removeSpaces = (value, replaced = '') => replace(value, '\\s+', replaced);

export {removeSpaces};

/*
 * Replace [search] value to [newvalue]
 * @param search - String to search
 * @param newvalue - String to replace
 * @params value - The string being searched and replaced on.
 * @return String replaced
 */
const replace = (value, search = '', newvalue = '') =>
    value.replace(new RegExp(search, 'g'), newvalue);

export {replace};

/*
 * Remove all non valid characters
 * Example: change á => a or ẽ => e
 * @params value - The string being searched and replaced on.
 * @return String without non valid characters.
 */
const removeNonChars = (value) => {
    let result = value;
    for(let key in ascii){
        for(let char in ascii[key]){
            result = replace(result, ascii[key][char], key);
        }
    }
    return result;
};

export {removeNonChars};

/*
 * Append Strings on Value
 * @param value String initial
 * @param ...append - array with strings to append
 * @return string
 */
const append = (value, ...appends) => {

    validString(value);
    validArrayString(appends);

    if(length(appends) === 0){
        return value;
    }

    return value + appends.join('');
};

export {append};


/*
 * Get the character at index
 * @param value
 * @param index
 * @return char
 */
const at = (value, index) => {
    validString(value);
    validNumber(index);

    return substr(value, index, 1);
};

export {at};

/*
 * Returns array with strings between [start] and [end]
 * @param value
 * @param start
 * @param end
 * @return Array
 */
const between = (value, start, end) => {

    let result = null;

    validArrayString([value, start, end]);

    result = split(value, end);

    result = result.map((text) => {
        return substr(text, text.indexOf(start)+start.length);
    });

    result = _pop(result);

    return result;
};

export {between};

/*
 * Returns an array consisting of the characters in the string.
 * @params value
 * @returns Array
 */
const chars = (value) => {
    let chars = [];

    validString(value);

    for(let i = 0; i < value.length; i++){
        chars[i] = at(value, i);
    }
    return chars;
};

export {chars};

/*
 * Replaces consecutive whitespace characters with a single space
 * @param string
 * @return string
 */
const collapseWhitespace = (value) => trim(replace(value, '\\s\\s+',' '));

export {collapseWhitespace};

/*
 * Remove all non word characters
 * Example: change . => [replace]
 * @paramsClojure replace - Value to replace
 * @params value - The string being searched and replaced on.
 * @return String without non word characters.
 */
const removeNonWords = (value, replaced = '') => replace(value, '[^\\w]+', replaced);

export {removeNonWords};

/*
 * Verifies that the needle is contained in value
 * @param value
 * @param needle
 * @param caseSensitive - default true
 * @return boolean
 */
const contains = (value, needle, caseSensitive = true) => {

    if(caseSensitive){
        return indexOf(value, needle) > -1;
    }

    return indexOf(toUpperCase(value), toUpperCase(needle)) > -1;

};

export {contains};

/*
 * Verifies that all needles are contained in value
 * @param value
 * @param needle
 * @param caseSensitive - default true
 * @return boolean
 */
const containsAll = (value, needles, caseSensitive = true) => {
    for(let i = 0; i < needles.length; i++){
        if(!contains(value, needles[i], caseSensitive)){
            return false;
        }
    }
    return true;
};

export {containsAll};

/*
 * Verifies that one or more of needles are contained in value
 * @param value
 * @param needle
 * @param caseSensitive - default true
 * @return boolean
 */
const containsAny = (value, needles, caseSensitive = true) => {
    for(let i = 0; i < needles.length; i++){
        if(contains(value, needles[i], caseSensitive)){
            return true;
        }
    }
    return false;
};

export {containsAny};

/*
 * Polyfill to countSubstr function
 * @param value,
 * @param substr,
 * @param position = 0,
 * @param count = 0,
 * @param allowOverlapping = false
 * @return integer
 */
const _countSubstring = (value, substr, allowOverlapping = false, position = 0, count = 0) => {

    let _position = indexOf(value, substr, position);

    if(_position === -1){
        return count;
    }

    if(!allowOverlapping){
        _position = _position + substr.length - 1;
    }

    return _countSubstring(value, substr, allowOverlapping, _position + 1, count + 1);

};

/*
 * Count the number of times substr appears in value
 * @param value,
 * @param substr,
 * @param caseSensitive = true,
 * @param allowOverlapping = false
 * @return integer
 */
const countSubstr = (value, substr, caseSensitive = true, allowOverlapping = false) => {

    if(!caseSensitive){
        value = toUpperCase(value);
        substr = toUpperCase(substr);
    }

    return _countSubstring(value, substr, allowOverlapping);

};

export {countSubstr};

/*
 * Test if [value] ends with [search]
 * @param value
 * @param search
 * @param position = null
 * @return boolean
 */
const endsWith = (value, search, position = null) => {

    let lastIndex = null;

    if (typeof position !== 'number' || !isFinite(position)
            || Math.floor(position) !== position || position > value.length) {
        position = length(value);
    }

    position -= length(search);
    lastIndex = indexOf(value, search, position);

    return lastIndex !== -1 && lastIndex === position;

};

export {endsWith};

/*
 * Test if [value] starts with [search]
 * @param value
 * @param search
 * @param position = null
 * @return boolean
 */
const startsWith = (value, search, position = 0) =>
    substr(value, position, search.length) === search;

export {startsWith};

/*
 * Ensures that the [value] begins with [substr]. If it doesn't, it's prepended.
 * @param value
 * @param substr
 * @return string
 */
const ensureLeft = (value, substr)  => {
    if(!startsWith(value, substr)){
        return append(substr, value);
    }

    return value;
};

export  {ensureLeft};

/*
 * Ensures that the [value] ends with [substr]. If it doesn't, it's appended.
 * @param value
 * @param substr
 * @return string
 */
const ensureRight = (value, substr)  => {

    if(!endsWith(value, substr)){
        return append(value, substr);
    }

    return value;
};

export {ensureRight};

/*
 * Return the first n chars of string.
 * @param value
 * @param n
 * @return string
 */
const first = (value, n) => substr(value, 0, n);

export {first};

/*
 * Return the last n chars of string.
 * @param value
 * @param n
 * @return string
 */
const last = (value, n) => substr(value, -1 * n, n);

export {last};

/*
 * The indexOf() method returns the index within the calling String object of the first occurrence
 * of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
 *
 * @param value
 * @param needle
 * @param offset
 * @return integer
 */
const indexOf = (value, needle, offset = 0) =>  value.indexOf(needle, offset);

export {indexOf};

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
const lastIndexOf = (value, needle, offset = undefined) => value.lastIndexOf(needle, offset);

export {lastIndexOf};

/*
 * Inserts [substr] into the [value] at the [index] provided.
 * @param value
 * @param substr
 * @param index
 * @return string
 */
const insert = (value, _substr, index) => {

    let start = null;
    let end = null;

    if(index > length(value)){
        return value;
    }

    start = substr(value, 0, index);
    end = substr(value, index, length(value));

    return append(start, _substr, end);

};

export {insert};

/*
 * Returns the length of the string
 * @param value
 * @return integer
 */
const length = value => value.length;

export {length};

/*
 * Returns a new string of a given length such that the beginning of the string is padded.
 * @param value
 * @param length
 * @param char
 * @return string
 */
 const leftPad = (value, _length, char = ' ') => {

    let i = -1;
    let result = value;
    char = String(char);

    if(length(char) > 1){
        char = char.substr(0, 1);
    }

    validCharLength(char);

    _length = _length - length(value);

    while (_length > ++i) {
        result = append(char, result);
    }

    return result;
};

export {leftPad};

/*
 * Returns a new string of a given length such that the ending of the string is padded.
 * @param value
 * @param length
 * @param char
 * @return string
 */
const rightPad = (value, _length, char = ' ') => {

    let i = -1;
    let result = value;
    char = String(char);

    if(char.length > 1){
        char = substr(char, 0, 1);
    }

    validCharLength(char);

    _length = _length - length(value);

    while (_length > ++i) {
        result = append(result, char);
    }

    return result;
};

export {rightPad};

/*
 * Alias to substr function
 * @param value
 * @param start
 * @param length = undefined
 * @return string
 */
const substr = (value, start, length = undefined) => value.substr(start, length);

export {substr};

/*
 * Alias to split function
 * @param value
 * @param separator
 * @param limit = undefined
 * @return string
 */
const split = (value, separator, limit = undefined) => value.split(separator, limit);

export {split};

/*
 * Returns a new string starting with [prepends].
 * @param value
 * @param ...prepends
 * @return string
 */
const prepend = (value, ...prepends) => {

    validString(value);
    validArrayString(prepends);

    if(length(prepends) === 0){
        return value;
    }

    return prepends.join('') + value;
};

export {prepend};

