import {toLowerCase, trim, removeSpaces, replace, removeNonChars} from './lib/string';
import {format} from './lib/format';

/*
 * Converts a string to a slug.
 * Example: slugify("A Javascript string manipulation library") => "a-javascript-string-manipulation-library"
 * @param string - value for slugfy
 * @return String - returns a slugfy string.
 */
export function slugify(string) {

    return format(string,
            [
                toLowerCase,
                trim,
                removeSpaces("-"),
                replace("&","-and-"),
                replace("\-\-+","-"),
                removeNonChars,
                replace("[^\\w\\-]+", "")
            ]
        );
}

