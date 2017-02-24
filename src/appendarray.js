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

    if(appends.lenght === 0){
        return value;
    }

    return value + appends.join('');
};

export default appendArray;
