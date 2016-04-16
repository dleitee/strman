import {isString, length} from '../string.utils.js';
import {_isNumber} from './number';

const validString = value => {
    if(!isString(value)){
        throw new Error('[strman] ' + value + ' is not a String.');
    }

    return true;
};

export {validString};

const validArrayString = array => {

    array.map((data) => {
        if(!isString(data)){
            throw new Error('[strman] ' + data + ' is not a String.');
        }
        return data;
    });

    return true;
};

export {validArrayString};

const validNumber = value => {
    if(!_isNumber(value)){
        throw new Error('[strman] ' + value + ' is not a Number.');
    }

    return true;
};

export {validNumber};

const validCharLength = char => {
    if(length(char) === 0){
        throw new Error('Char should be length >= 1');
    }

    return true;
};

export {validCharLength};
