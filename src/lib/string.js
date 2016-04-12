import {ascii} from "./ascii";

export const _isString = value =>
    Object.prototype.toString.call(value) === '[object String]';

export const toLowerCase = value => value.toLowerCase();

export const trim = value => value.trim();

export const removeSpaces = (replace = "") => (value) => value.replace(/\s+/g, replace)

export const replace =
    (search = "", newvalue = "") =>
        (value) => _replace(value, search, newvalue);

export const removeNonChars = (value) => {
    let result = value;
    for(let key in ascii){
        for(let char in ascii[key]){
            result = _replace(result, ascii[key][char], key);
        }
    }
    return result;
}

let _replace = (value, search, newvalue) => value.replace(new RegExp(search, "g"), newvalue);


