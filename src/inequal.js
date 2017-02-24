/**
 * Tests if two strings are inequal.
 * @playground
 * var inequal = require('strman').inequal;
 * let result = inequal("foo", "foo");
 * @param {String} stringA - String for the comparative
 * @param {String} stringB - String to be compared
 * @returns {Boolean} - [stringA] is inequal [stringB]
 */
const inequal = (stringA, stringB) => stringA !== stringB;

export default inequal;
