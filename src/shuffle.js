import split from './split'

/**
 * It returns a array with its values in random order.
 * @private
 * @param {Array} value - The array!.
 * @return {Array} - The Array shuffled!
*/
const shuffle = (array = []) => {
  let j
  let i
  const newArray = array
  for (i = array.length; i; i -= 1) {
    j = Math.floor(Math.random() * i)
    newArray[i - 1] = array[j]
    newArray[j] = array[i - 1]
  }
  return newArray
}

/**
 * It returns a string with its characters in random order.
 * @playground
 * var shuffle = require('strman').shuffle;
 * let title = "strman";
 * let result = shuffle(title);
 * @param {String} value - The String!.
 * @return {String} - The String shuffled!
 */
export default value => shuffle(split(value)).join('')
