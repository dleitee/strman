import {toLowerCase, trim, removeSpaces, replace, removeNonChars} from './lib/string';
import {format} from './lib/format';

/*
 * @param string - value for slugfy
 * @return String - returns a slugfy string.
 */
export function slugfy(string) {

    return format(string,
            [toLowerCase,
            trim,
            removeSpaces("-"),
            replace("&","-and-"),
            replace("\-\-+","-'"),
            removeNonChars]
        );
}

