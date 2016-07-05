import {ascii} from './lib/ascii';
import {_pop} from './lib/array';
import {toCaseSensitive} from './lib/case';
/**
 * Checks whether a string.
 * @playground
 * var isString = require('strman').isString;
 * let title = "A Javascript string manipulation library.";
 * let result = isString(title);
 * @param {String} value - The String!.
 * @return {Boolean} - if 'value' isString, return true, else false.
 */
const isString = value =>
    Object.prototype.toString.call(value) === '[object String]';

export {isString};

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
const trim = (value, char = ' ') => leftTrim(rightTrim(value, char), char);

export {trim};

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
const leftTrim = (value, char = ' ') => replace(value, `^${char}+`, '');

export {leftTrim};

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
const rightTrim = (value, char = ' ') => replace(value, `${char}+$`, '');

 export {rightTrim};

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
const removeSpaces = (value, replaced = '') => replace(value, '\\s+', replaced);

export {removeSpaces};

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
const replace = (value, search = '', newvalue = '', caseSensitive = true, multiline = true) => {
    var flags = caseSensitive ? 'g' : 'gi';

    multiline ? flags + 'm' : flags;

    return value.replace(new RegExp(search, flags), newvalue);

};

export {replace};

/**
 * Remove all non valid characters. Example: change á => a or ẽ => e.
 * @playground
 * var transliterate = require('strman').transliterate;
 * let title = "strmáñ";
 * let result = transliterate(title);
 * @param {String} value - The String!.
 * @return {String} - String without non valid characters.
 */
const transliterate = value => {
    for(let key in ascii){
        ascii[key].map((char) => value = replace(value, char, key));
    }
    return value;
};

export {transliterate};

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
const append = (value, ...appends) => appendArray(value, appends);

export {append};

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
const appendArray = (value, appends = []) => {

    if(length(appends) === 0){
        return value;
    }

    return value + appends.join('');
};

export {appendArray};


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
const at = (value, index) => substr(value, index, 1);

export {at};

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
const between = (value, start, end) =>
    _pop(split(value, end).map((text) => substr(text, indexOf(text, start)+length(start))));

export {between};

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
const chars = value => value.split('');

export {chars};

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
const collapseWhitespace = value => trim(replace(value, '\\s\\s+',' '));

export {collapseWhitespace};

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
const removeNonWords = (value, replaced = '') => replace(value, '[^\\w]+', replaced);

export {removeNonWords};

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
const contains = (value, needle, caseSensitive = true) =>
    indexOf(value, needle, 0, caseSensitive) > -1;

export {contains};

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
const containsAll = (value, needles, caseSensitive = true) =>
    length(needles) > 0?needles.reduce((previous, current) =>
        !contains(value, current, caseSensitive)?false:previous && true
        , true):false;

export {containsAll};

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
const containsAny = (value, needles, caseSensitive = true) =>
    needles.reduce((previous, current) =>
        contains(value, current, caseSensitive)?true:previous, false);

export {containsAny};

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
const _countSubstring = (value, _substr, allowOverlapping = false, position = 0, count = 0) => {

    let _position = indexOf(value, _substr, position);

    if(_position === -1){
        return count;
    }

    if(!allowOverlapping){
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
const countSubstr = (value, _substr, caseSensitive = true, allowOverlapping = false) =>
    _countSubstring(
        toCaseSensitive(value, caseSensitive),
        toCaseSensitive(_substr, caseSensitive),
        allowOverlapping
    );

export {countSubstr};

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
const endsWith = (value, search, position = null, caseSensitive = true) => {

    if (typeof position !== 'number' || !isFinite(position)
            || Math.floor(position) !== position || position > length(value)) {
        position = length(value);
    }

    position -= length(search);

    const lastIndex = indexOf(
                    toCaseSensitive(value, caseSensitive),
                    toCaseSensitive(search, caseSensitive),
                    position
                );

    return lastIndex !== -1 && lastIndex === position;

};

export {endsWith};

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
const startsWith = (value, search, position = 0, caseSensitive = true) =>
    substr(
        toCaseSensitive(value, caseSensitive),
        position,
        length(search)
    ) === toCaseSensitive(search, caseSensitive);

export {startsWith};

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
const ensureLeft = (value, _substr, caseSensitive = true)  => {
    if(!startsWith(value, _substr, 0, caseSensitive)){
        return append(_substr, value);
    }

    return value;
};

export  {ensureLeft};

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
const ensureRight = (value, _substr, caseSensitive = true)  =>
    !endsWith(value, _substr, null, caseSensitive)?append(value, _substr):value;

export {ensureRight};

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
const first = (value, n) => substr(value, 0, n);

export {first};

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
const last = (value, n) => substr(value, -1 * n, n);

export {last};

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
const indexOf = (value, needle, offset = 0, caseSensitive = true) =>
    toCaseSensitive(value, caseSensitive).indexOf(toCaseSensitive(needle, caseSensitive), offset);

export {indexOf};

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
const lastIndexOf = (value, needle, offset = undefined, caseSensitive = true) =>
    toCaseSensitive(value, caseSensitive).lastIndexOf(
            toCaseSensitive(needle, caseSensitive),
            offset
        );

export {lastIndexOf};

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

/**
 * Returns the length of the string.
 * @playground
 * var length = require('strman').length;
 * let title = "strman";
 * let result = length(title);
 * @param {String} value - The String!.
 * @return {Number} - Length of the string..
 */
const length = value => value.length;

export {length};

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
 const leftPad = (value, _length, char = ' ') => {

    let result = value;
    char = String(char);

    if(length(char) > 1){
        char = substr(char, 0, 1);
    }

    _length = _length - length(value);

    result = append(repeat(char, _length), result);

    return result;
};

export {leftPad};

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
const rightPad = (value, _length, char = ' ') => {

    let result = value;
    char = String(char);

    if(length(char) > 1){
        char = substr(char, 0, 1);
    }

    _length = _length - length(value);

    result = append(result, repeat(char, _length));

    return result;
};

export {rightPad};

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
const substr = (value, start, _length = undefined) => value.substr(start, _length);

export {substr};

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
const split = (value, separator, limit = undefined) => value.split(separator, limit);

export {split};

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
const prepend = (value, ...prepends) => prependArray(value, prepends);

export {prepend};

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
const prependArray = (value, prepends = []) => {

    if(length(prepends) === 0){
        return value;
    }

    return prepends.join('') + value;
};

export {prependArray};

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
const removeLeft = (value, prefix, caseSensitive = true) => {

    if(startsWith(value, prefix, 0, caseSensitive)){
        return substr(value, length(prefix));
    }

    return value;
};

export {removeLeft};

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
const removeRight = (value, suffix, caseSensitive = true) => {
    let _length = length(value) - length(suffix);

    if(endsWith(value, suffix, null, caseSensitive)){
        return substr(value, 0, _length);
    }

    return value;
};

export {removeRight};

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
const repeat = (value, multiplier) => {
    let i = 0;
    let result = '';
    while(multiplier > i++) {
        result += value;
    }
    return result;
};

export {repeat};

/**
 * Returns a reversed string.
 * @playground
 * var reverse = require('strman').reverse;
 * let title = "strman";
 * let result = reverse(title);
 * @param {String} value - The String!.
 * @return {String} - The String reversed!
 */
const reverse = value =>
    split(value, '').reduceRight((previous, current) => append(previous, current), '');

export {reverse};

/**
 * It returns a array with its values in random order.
 * @private
 * @param {Array} value - The array!.
 * @return {Array} - The Array shuffled!
*/
const _shuffle =(array) => {
    let j;
    let x;
    let i;
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
const shuffle = (value) => _shuffle(split(value)).join('');

export {shuffle};

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
const surround = (value, _substr = '', _substrRight = null) =>
    append(_substr, value, _substrRight === null ? _substr : _substrRight);

export {surround};

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
 const slice = (value, beginSlice, endSlice = undefined) => value.slice(beginSlice, endSlice);

 export {slice};

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
const safeTruncate = (value, _length, _append = '') => {

    let truncated = '';

    if(_length === 0){
        return '';
    }

    if (_length >= length(value)) {
        return value;
    }

    _length -= length(_append) ;
    truncated = substr(value, 0, _length);

    let position = indexOf(value, ' ', _length - 1);

    if(position !== _length){
        let lastPos = lastIndexOf(truncated, ' ');
        truncated = substr(truncated, 0, lastPos);
    }

    return append(truncated, _append);

};

export {safeTruncate};

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
const truncate = (value, _length, _append = '') => {

    let truncated = '';

    if(_length === 0){
        return '';
    }

    if (_length >= length(value)) {
        return value;
    }

    _length -= length(_append) ;
    truncated = substr(value, 0, _length);

    return append(truncated, _append);

};

export {truncate};


/**
 * Remove empty strings from strings array.
 * @playground
 * var removeEmptyStrings = require('strman').removeEmptyStrings;
 * let titles = ["A Javascript string manipulation library.", null, undefined, '', ' '];
 * let result = removeEmptyStrings(titles);
 * @param {String[]} strings - Array of strings that will be cleaned.
 * @returns {String[]} - Array of strings without empty strings.
 */
const removeEmptyStrings = (strings) => strings.filter(string => string && string !== '');

export {removeEmptyStrings};

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
const format = (value, params = []) =>
    replace(value, '{(\\w+)}',
        (match, index) => typeof params[index] !== undefined ? params[index] : match
    );

export {format};

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
const compare = (stringA, stringB) => {
    if(equal(stringA, stringB)){
        return 0;
    }

    return stringA > stringB? 1 : -1;
};

export {compare};

/**
 * Tests if two strings are equal.
 * @playground
 * var equal = require('strman').equal;
 * let result = equal("foo", "foo");
 * @param {String} stringA - String for the comparative
 * @param {String} stringB - String to be compared
 * @returns {Boolean} - [stringA] is equal [stringB]
 */
const equal = (stringA, stringB) => stringA === stringB;

export {equal};

/**
 * Tests if two strings are inequal.
 * @playground
 * var inequal = require('strman').inequal;
 * let result = inequal("foo", "foo");
 * @param {String} stringA - String for the comparative
 * @param {String} stringB - String to be compared
 * @returns {Boolean} - [stringA] is inequal [stringB]
 */
const inequal = (stringA, stringB) => stringA !== stringB;

export {inequal};
