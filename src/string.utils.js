import {ascii} from "./lib/ascii";
import {_isNumber} from "./lib/number";
import {_pop} from "./lib/array";

/*
 * Checks whether a string
 * @param value - value to check
 * @return Boolean - true or false
 */
export const isString = value =>
    Object.prototype.toString.call(value) === '[object String]';

/*
 * Transform to lowercase
 * @params value - String to lowercase
 * @return String
 */
export const toLowerCase = value => value.toLowerCase();

/*
 * Remove all spaces on left and right
 * @params value - String to trim
 * @return String without boarders spaces
 */
export const trim = value => _ltrim(_rtrim(value));

/*
 * Remove spaces left
 * @params value
 * @return string
 */

export const ltrim = value => _ltrim(value);

/*
 * Remove spaces right
 * @params value
 * @return string
 */
 export const rtrim = value => _rtrim(value);

/*
 * Remove all spaces and replace for value
 * @paramsClojure replace - Value to replace
 * @param value - The string being searched and replaced on.
 * @return String without spaces
 */
export const removeSpaces = (replace = "") => (value) => _replace(value, "\\s+", replace);

/*
 * Replace [search] value to [newvalue]
 * @paramsClojure search - String to search
 * @paramsClojure newvalue - String to replace
 * @params value - The string being searched and replaced on.
 * @return String replaced
 */
export const replace =
    (search = "", newvalue = "") =>
        (value) => _replace(value, search, newvalue);

/*
 * Remove all non valid characters
 * Example: change á => a or ẽ => e
 * @params value - The string being searched and replaced on.
 * @return String without non valid characters.
 */
export const removeNonChars = (value) => {
    let result = value;
    for(let key in ascii){
        for(let char in ascii[key]){
            result = _replace(result, ascii[key][char], key);
        }
    }
    return result;
};

/*
 * Append Strings on Value
 * @param value String initial
 * @param ...append - array with strings to append
 * @return string
 */
export const append = (value, ...append) => _append(value, append);


/*
 * Get the character at index
 * @param string
 * @param index
 * @return char
 */
export const at = (string, index) => _at(string, index);

/*
 * Returns array with strings between [start] and [end]
 * @param value
 * @param start
 * @param end
 * @return Array
 */
export const between = (value, start, end) => {

    let result = null;

    if(!isString(value)){
        throw new Error("Value is not a String.");
    }

    if(!isString(start)){
        throw new Error("Start is not a String.");
    }

    if(!isString(end)){
        throw new Error("End is not a String.");
    }

    result = value.split(end);

    result = result.map((text) => {
        return text.substr(text.indexOf(start)+start.length);
    });

    result = _pop(result);

    return result;
};

/*
 * Returns an array consisting of the characters in the string.
 * @params value
 * @returns Array
 */
export const chars = (value) => {
    let chars = [];

    if(!isString(value)){
        throw new Error("Value is not a String.");
    }

    for(let i = 0; i < value.length; i++){
        chars[i] = _at(value, i);
    }
    return chars;
};

/*
 * Replaces consecutive whitespace characters with a single space
 * @param string
 * @return string
 */
export const collapseWhitespace = (value) => _rtrim(_ltrim(_replace(value, "\\s\\s+"," ")));

/*
 * Remove all non word characters
 * Example: change . => [replace]
 * @paramsClojure replace - Value to replace
 * @params value - The string being searched and replaced on.
 * @return String without non word characters.
 */
export const removeNonWords = (replace ="") => (value) => _replace(value, "[^\\w]+", replace);

/*
 * Verifies that the needle is contained in value
 * @param value
 * @param needle
 * @param caseSensitive - default true
 * @return boolean
 */
export const contains = (value, needle, caseSensitive = true) =>
    _contains(value, needle, caseSensitive);

/*
 * Verifies that all needles are contained in value
 * @param value
 * @param needle
 * @param caseSensitive - default true
 * @return boolean
 */
export const containsAll = (value, needles, caseSensitive = true) => {
    for(let i = 0; i < needles.length; i++){
        if(!_contains(value, needles[i], caseSensitive)){
            return false;
        }
    }
    return true;
};

/*
 * Verifies that one or more of needles are contained in value
 * @param value
 * @param needle
 * @param caseSensitive - default true
 * @return boolean
 */
export const containsAny = (value, needles, caseSensitive = true) => {
    for(let i = 0; i < needles.length; i++){
        if(_contains(value, needles[i], caseSensitive)){
            return true;
        }
    }
    return false;
};

/*
 * Count the number of times substr appears in value
 * @param value,
 * @param substr,
 * @param caseSensitive = true,
 * @param allowOverlapping = false
 * @return integer
 */
export const countSubstr = (value, substr, caseSensitive = true, allowOverlapping = false) => {

    // TODO: update with polyfill
    if(!caseSensitive){
        value = value.toUpperCase();
        substr = substr.toUpperCase();
    }

    return _countSubstring(value, substr, allowOverlapping);

};

/*
 * Test if [value] ends with [search]
 * @param value
 * @param search
 * @param position = null
 * @return boolean
 */
export const endsWith = (value, search, position = null) => _endsWith(value, search, position);

/*
 * Test if [value] starts with [search]
 * @param value
 * @param search
 * @param position = null
 * @return boolean
 */
export const startsWith = (value, search, position = 0) => _startsWith(value, search, position);

/*
 * Ensures that the [value] begins with [substr]. If it doesn't, it's prepended.
 * @param value
 * @param substr
 * @return string
 */
export const ensureLeft = (value, substr)  => {
    if(!_startsWith(value, substr)){
        return substr + "" + value;
    }

    return value;
};

/*
 * Ensures that the [value] ends with [substr]. If it doesn't, it's appended.
 * @param value
 * @param substr
 * @return string
 */
export const ensureRight = (value, substr)  => {

    if(!_endsWith(value, substr)){
        return value + "" + substr;
    }

    return value;
};

/*
 * Return the first n chars of string.
 * @param value
 * @param n
 * @return string
 */
export const first = (value, n) => value.substr(0, n);

/*
 * Return the last n chars of string.
 * @param value
 * @param n
 * @return string
 */
export const last = (value, n) => value.substr(-1 * n, n);

/*
 * Verify if has lowerCase
 * @param value
 *  @return boolean
 */
 // TODO: update to polyfill
export const isLowerCase = (value) => value === value.toLowerCase();

/*
 * Verify if has upperCase
 * @param value
 * @return boolean
 */
 // TODO: update to polyfill
export const isUpperCase = (value) => value === value.toUpperCase();

/*
 * The indexOf() method returns the index within the calling String object of the first occurrence
 * of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
 *
 * @param value
 * @param needle
 * @param offset
 * @return integer
 */
export const indexOf = (value, needle, offset = 0) =>  value.indexOf(needle, offset);

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
export const lastIndexOf = (value, needle, offset = undefined) => value.lastIndexOf(needle, offset);

/*
 * Inserts [substr] into the [value] at the [index] provided.
 * @param value
 * @param substr
 * @param index
 * @return string
 */
export const insert = (value, substr, index) => {
    
    let start = null;
    let end = null;

    if(index > value.length){
        return value;
    }

    start = value.substr(0, index);
    end = value.substr(index, value.length);

    return _append(start, [substr, end]);

};

/*
 * Returns the length of the string
 * @param value
 * @return integer
 */
export const length = (value) => value.length;

/*
 * Returns a new string of a given length such that the beginning of the string is padded.
 * @param value
 * @param length
 * @param char
 * @return string
 */
 export const leftPad = (value, length, char = ' ') => {
    
    let i = -1;
    let result = value;
    char = String(char);

    if(char.length > 1){
        char = char.substr(0, 1);
    }

    if(char.length === 0){
        throw new Error("Char should be length >= 1");
    }

    length = length - value.length;

    while (length > ++i) {
        result = _append(char, [result]);
    }

    return result;
}

/*
 * Polyfill to append function
 * @param value
 * @param append
 * @return string
 */
let _append = (value, append) => {
    if(!isString(value)){
        throw new Error("Value is not a String.");
    }

    append.map((data) => {
        if(!isString(data)){
            throw new Error("Append is not a String.");
        }
        return data;
    });
    return value + append.join("");
};

/*
 * Polyfill to startsWith function
 * @param value
 * @param search
 * @param position
 * @return boolean
 */
let _startsWith = (value, search, position = 0) => value.substr(position, search.length) === search;

/*
 * Polyfill to endsWith function
 * @param value
 * @param search
 * @param position
 * @return boolean
 */
let _endsWith = (value, search, position = null) => {

    let lastIndex = null;

    if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > value.length) {
        position = value.length;
    }

    position -= search.length;
    lastIndex = value.indexOf(search, position);

    return lastIndex !== -1 && lastIndex === position;

};


/*
 * Polyfill to countSubstr function
 * @param value,
 * @param substr,
 * @param position = 0,
 * @param count = 0,
 * @param allowOverlapping = false
 * @return integer
 */
let _countSubstring = (value, substr, allowOverlapping = false, position = 0, count = 0) => {

    let _position = value.indexOf(substr, position);

    if(_position === -1){
        return count;
    }

    if(!allowOverlapping){
        _position = _position + substr.length - 1;
    }

    return _countSubstring(value, substr, allowOverlapping, _position + 1, count + 1);

};

/*
 * Polyfill to contains function
 * @param value
 * @param needle
 * @param caseSensitive - default true
 * return boolean
 */
let _contains = (value, needle, caseSensitive = true) => {
    if(caseSensitive){
        return value.indexOf(needle) > -1;
    }

    // TODO: update to polyfill
    return value.toUpperCase().indexOf(needle.toUpperCase()) > -1;

};

/*
 * Polyfill to replace function
 * @params value - The string being searched and replaced on.
 * @return This function returns a string with the replaced values.
 */
let _replace = (value, search, newvalue) =>
    value.replace(new RegExp(search, "g"), newvalue);

/*
 * Polyfill to ltrim function
 * @param value - value to ltrim
 * @return string
 */
let _ltrim = (value) => _replace(value, "^\\s+", '');

/*
 * Polyfill to rtrim function
 * @param value - value to rtrim
 * @return string
 */
let _rtrim = (value) => _replace(value, "\\s+$", '');

/*
 * Polyfill to at function
 * @param string
 * @param int
 * @return char
 */
let _at = (string, index) => {
    if(!isString(string)){
        throw new Error("Value is not a String.");
    }
    if(!_isNumber(index)){
        throw new  Error("Index is not a Number.");
    }
    return string.substr(index, 1);
}
