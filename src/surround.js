import append from './append'
/**
 * Surrounds a 'value' with the given 'substr'.
 * @playground
 * var surround = require('strman').surround;
 * let title = "strman";
 * let result = surround(title, '<', '>');
 * @param {String} value - The String!.
 * @param {String} _substr - The substr to append on left, if substrRight is null, this is appended in right.
 * @param {String} _substrRight - The substr to append on right.
 * @return {String} - The String with surround substrs!
 */
export default (value, _substr = '', _substrRight = null) =>
  append(_substr, value, _substrRight === null ? _substr : _substrRight)
