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
