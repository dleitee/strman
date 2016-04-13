import {isNil} from './isnil';
import {_isArray} from './array';
import {isString} from '../string.utils';
import {reduce} from './reduce';

export const _format =
    (...fn) =>
        value => {
            if (isNil(value)) {
                return value;
            }

            return reduce((acc, x) => {

                if (isNil(x)) {
                    throw new Error('The function for format is null or undefined.');
                }

                if(!isString(acc)){
                    throw new Error('Value is not a String object!');
                }

                return x(acc);
            }, value, fn);
    }

/**
 * This method is responsible for handling strings.
 *
 * @usage format(<String>, <Function-1>, <Function-2>, ..., <Function-n>)
 * @param value - string to be manipulated
 * @param fn - series of manipulation functions
 * @return <String> - manipulated string
 */
export const format =
    (value, fn = []) => (
        _format(
            ...(_isArray(fn) ? fn : [fn])
            )(value)
        );
