import appendArray from './appendarray'

/**
 * Append Strings on Value with spreaded arguments
 * @param {String} value Initial value
 * @param {String} appends Spreaded array with strings to append
 * @return {String} The concatenated string
 * @playground
 * var strman = require('strman')
 *
 * let title = 's'
 * strman.append(title, 'tr', 'm', 'an') // returns 'strman'
 */
export default (value, ...appends) => appendArray(value, appends)
