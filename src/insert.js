/**
 * Inserts 'substr' into the 'value' at the 'index' provided.
 * @playground
 * var insert = require('strman').insert;
 * let title = "trman";
 * let result = insert(title, 's', 0);
 * @param {String} value - The String!.
 * @param {String} _substr - Value to insert.
 * @param {Number} index - Index to insert substr.
 * @return {String} - String with substr added.
 */
const insert = (value, _substr, index) => {

    let start = null;
    let end = null;

    if(index > length(value)){
        return value;
    }

    start = substr(value, 0, index);
    end = substr(value, index, length(value));

    return append(start, _substr, end);

};

export {insert};
