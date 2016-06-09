import {isString, length} from '../string.utils.js';
import {_isNumber} from './number';
import {error} from './throw';

const errorNotATypeMessage = (type, value) => `[strman] ${value} is not a ${type}.`;

const validString = value => {
    if(!isString(value)){
        throw error(errorNotATypeMessage('String', value));
    }

    return true;
};

export {validString};

const validArrayString = array => {

    array.map((data) => {
        validString(data);
        return data;
    });

    return true;
};

export {validArrayString};

const validNumber = value => {
    if(!_isNumber(value)){
        throw error(errorNotATypeMessage('Number', value));
    }

    return true;
};

export {validNumber};

const validCharLength = char => {
    if(length(char) === 0){
        throw error('Char should be length >= 1');
    }

    return true;
};

export {validCharLength};
