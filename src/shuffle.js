import split from './split'

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
 * @module shuffle
 * @description
 * It returns a string with its characters in random order.
 * ## Install
 * Install all functions of strman
 * ```sh
 * yarn add strman
 * ```
 * or just the shuffle function
 * ```sh
 * yarn add strman.shuffle
 * ```
 * ## Usage
 * ```javascript
 * import { shuffle } from 'strman'
 * // OR
 * import shuffle from 'strman.shuffle'
 * ```
 * @param {String} value The String!
 * @example
 * shuffle('strman')
 * // => 'rtmnas'
 * @returns {String} The String shuffled!
 */
export default value => shuffle(split(value)).join('')
