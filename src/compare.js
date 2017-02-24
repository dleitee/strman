import equal from './equal'

/**
 * Compares two strings to each other. If they are equivalent, a zero is returned. Otherwise,
 * most of these routines will return a positive or negative result corresponding to whether stringA
 * is lexicographically greater than, or less than, respectively, than stringB.
 * @playground
 * var compare = require('strman').compare;
 * let result = compare("foo", "bar");
 * @param {String} stringA - String for the comparative
 * @param {String} stringB - String to be compared
 * @returns {Number} - +1 if [stringA] > [stringB], -1 if [stringA] < [stringB] and 0 if [stringA] = [stringB]
 */
const compare = (stringA, stringB) => {
    if(equal(stringA, stringB)){
        return 0;
    }

    return stringA > stringB? 1 : -1;
};

export default compare;
