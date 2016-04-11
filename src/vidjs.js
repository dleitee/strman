import {isNil} from './lib/isnil.js'
import {_isArray} from './lib/isarray.js'
import {reduce} from './lib/reduce.js'


export const format =
    (...fn) =>
        value => {
            if (isNil(value)) {
                return false;
            }

        return reduce((acc, x) => {
            if (isNil(x)) {
                throw new Error('The function for format is null or undefined.');
            }

            return acc && x(value);
        }, true, fn);
    }

/**
 * This method is responsible for handling strings.
 *
 * @usage vidify(<String>, <Function-1>, <Function-2>, ..., <Function-n>)
 * @param value - string to be manipulated
 * @param fn - series of manipulation functions
 * @return <String> - manipulated string
 */
export const vidify =
    (value, fn = []) => (
        format(
            ...(_isArray(fn) ? fn : [fn])
            )(value)
        );
