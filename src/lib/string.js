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
export const trim = value => value.trim();

/*
 * Remove all spaces and replace for value
 * @paramsClojure replace - Value to replace
 * @param value - The string being searched and replaced on.
 * @return String without spaces
 */
export const removeSpaces = (replace = "") => (value) => _replace(value, "\s+", replace);

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
 * Polyfill to replace function
 * @params value - The string being searched and replaced on.
 * @return This function returns a string with the replaced values.
 */
let _replace = (value, search, newvalue) => value.replace(new RegExp(search, "g"), newvalue);


