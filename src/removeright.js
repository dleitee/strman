import endsWith from './endswith'
import substr from './substr'
/**
 * Returns a new string with the 'suffix' removed, if present.
 * @playground
 * var removeRight = require('strman').removeRight;
 * let title = "strman";
 * let result = removeRight(title, 'man');
 * @param {String} value - The String!.
 * @param {String} suffix - String to remove on right.
 * @param {Boolean} caseSensitive - If you need to caseSensitive.
 * @return {String} - The String without suffix!
 */
export default (value, suffix, caseSensitive = true) => {
  const length = value.length - suffix.length

  if (endsWith(value, suffix, null, caseSensitive)) {
    return substr(value, 0, length)
  }

  return value
}
