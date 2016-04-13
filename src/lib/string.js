import {ascii} from "./ascii";

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
}

/*
 * Append Strings on Value
 * @param value String initial
 * @param ...append - array with strings to append
 * @return string
 */
export const append = (value, ...append) => {
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
}

/*
 * Get the character at index
 * @param string
 * @param index
 * @return char
 */
export const at = (string, index) => {
    if(!isString(string)){
        throw new Error("Value is not a String.");
    }
    if(!isNumber(index) && index >= 0){
        throw new  Error("Index is not a Number.");
    }
    return string.substr(index, 1);
}

/*
 * Returns array with strings between [start] and [end]
 * @param value
 * @param start
 * @param end
 * @return Array
 */
export const between = (value, start, end) => {
  let result = value.split(end);
  
  result = result.map((text) => {
    return text.substr(text.indexOf(start)+start.length);
  });
  
  // TODO: Remove method pop
  result.pop();
  
  return result;
}

/*
 * Remove all non word characters
 * Example: change . => [replace]
 * @paramsClojure replace - Value to replace
 * @params value - The string being searched and replaced on.
 * @return String without non word characters.
 */
export const removeNonWords = (replace ="") => (value) => _replace(value, "[^\\w]+", replace);

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


