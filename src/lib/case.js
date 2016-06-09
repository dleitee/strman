import {toUpperCase} from '../string.cases';

const toCaseSensitive = (value, caseSensitive = true) =>
    caseSensitive?value:toUpperCase(value);

export {toCaseSensitive};
