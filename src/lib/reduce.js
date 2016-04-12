/* reduce(func, index, array)
 *
 * This method applies a function against an accumulator and each value of the array
 * (from left-to-right) to reduce it to a single value.
 *
 * @param func - function
 *      Function to execute on each value in the array, taking four arguments:
 *          function(previousValue, value)
 *          Example (ES2015):
 *            const func = (a, b) => a + b
 *
 * @param index
 *      The index of the current element being processed in the array.
 *
 * @param array - Array
 *      The array reduce was called upon.
 *
 * Example:
 *
 * const sum = (a, b) => a + b
 * const array = [1,2,3,4,5]
 * const result = reduce(sum, 0, array)
 * => result = 15
 *
 */

export const reduce = (func, index, array) => {
    if (Array.prototype.reduce) {
        return Array.prototype.reduce.apply(array, [func, index]);
    }

    // Transform array to iterator es2015
    const iterator = array[Symbol.iterator]();

    // Recursive function
    const go = (acc, iterable) => {
        const {value, done} = iterable.next();
        return done ? acc : go(func(acc, value), iterable);
    }

    // Call recursive function
    return go(index, iterator);
}
