# String Utils

```es6
import {isString, trim, removeSpaces, replace, removeNonChars} from 'strman'
```

## isString([value])

Checks whether a string

#### Usage
```es6
import {isString} from 'strman'

let title = "Checks whether a string";
let result = isString(title);
// result => true

let number = 1;
let result = isString(number);
// result => false
```

## trim([value])

Remove all spaces on left and right

#### Usage
```es6
import {trim} from 'strman'

let title = "     Checks whether a string     ";
let result = trim(title);
// result => "Checks whether a string";
```

## ltrim([value])

Remove all spaces on left

#### Usage
```es6
import {ltrim} from 'strman'

let title = "     Checks whether a string";
let result = ltrim(title);
// result => "Checks whether a string";
```

## rtrim([value])

Remove all spaces on right

#### Usage
```es6
import {rtrim} from 'strman'

let title = "Checks whether a string     ";
let result = rtrim(title);
// result => "Checks whether a string";
```

## removeSpaces([replace])([value])

Remove all spaces and replace for value

#### Usage
```es6
import {removeSpaces} from 'strman'

let title = "Remove all spaces and replace for value";
let result = removeSpaces("-")(title);
// result => "Checks-whether-a-string";

let result = removeSpaces()(title);
// result => "Checkswhetherastring";
```

## replace([search], [newvalue])([value])

Replace [search] value to [newvalue]

#### Usage
```es6
import {replace} from 'strman'

let title = "My car is black";
let result = replace("black", "white")(title);
// result => "My car is white";
```

## removeNonChars([value])

Remove all non valid characters

#### Usage
```es6
import {removeNonChars} from 'strman'

let title = "áéíóú";
let result = removeNonChars(title);
// result => "aeiou";
```

## removeNonWords([replace])([value])

Remove all non word characters

#### Usage
```es6
import {removeNonWords} from 'strman'

let title = ".....a";
let result = removeNonWords("")(title);
// result => "a";
```

## append([value], ...[append])

Append Strings on Value

#### Usage
```es6
import {append} from 'strman'

let title = "a";
let result = append(title, "b", "c");
// result => "abc";
```

## at([value], [index])

Get the character at index

#### Usage
```es6
import {at} from 'strman'

let title = "abc";
let result = at(title, 1);
// result => "b";
```

## between([value], [start], [end])

Returns array with strings between [start] and [end]

#### Usage
```es6
import {between} from 'strman'

let title = "[abc][def]";
let result = between(title, "[", "]");
// result => ["abc", "def"];
```

## chars([value])

Returns an array consisting of the characters in the string.

#### Usage
```es6
import {chars} from 'strman'

let title = "abc";
let result = chars(title);
// result => ["a", "b", "c"];
```

## collapseWhitespace([value])

Replaces consecutive whitespace characters with a single space

#### Usage
```es6
import {collapseWhitespace} from 'strman'

let title = "   a    b   c    ";
let result = collapseWhitespace(title);
// result => "a b c";
```

## contains([value], [needle], [caseSensitive = true])

Verifies that the needle is contained in value

#### Usage
```es6
import {contains} from 'strman'

let title = "Daniel Leite";
let needle = "Leite";
let result = contains(title, needle, true);
// result => true;
```

## containsAll([value], [needles], [caseSensitive = true])

Verifies that all needles are contained in value

#### Usage
```es6
import {containsAll} from 'strman'

let title = "Daniel Leite";
let needles = ["Leite", "Daniel"];
let result = containsAll(title, needles, true);
// result => true;
```

## containsAny([value], [needles], [caseSensitive = true])

Verifies that one or more of needles are contained in value

#### Usage
```es6
import {containsAny} from 'strman'

let title = "Daniel Leite";
let needles = ["Leite", "Daniel", "Oliveira"];
let result = containsAny(title, needles, true);
// result => true;
```

## countSubstr([value], [substr], [caseSensitive = true], [allowOverlapping = false])

Count the number of times substr appears in value

#### Usage
```es6
import {countSubstr} from 'strman'

let title = "Daniel Leite";
let substr = "Leite";
let result = countSubstr(title, substr);
// result => 1;
```

## endsWith([value], [search], [position=null])

Test if [value] ends with [search]

#### Usage
```es6
import {endsWith} from 'strman'

let value = "Daniel Leite";
let search = "Leite";
let result = endsWith(value, search);
// result => true;
```

## startsWith([value], [search], [position=0])

Test if [value] starts with [search]

#### Usage
```es6
import {startsWith} from 'strman'

let value = "Daniel Leite";
let search = "Daniel";
let result = startsWith(value, search);
// result => true;
```

## ensureLeft([value], [substr])

Ensures that the [value] begins with [substr]. If it doesn't, it's prepended.

#### Usage
```es6
import {ensureLeft} from 'strman'

let value = "Leite";
let substr = "Daniel ";
let result = ensureLeft(value, substr);
// result => "Daniel Leite";
```

## ensureRight([value], [substr])

Ensures that the [value] ends with [substr]. If it doesn't, it's appended.

#### Usage
```es6
import {ensureRight} from 'strman'

let value = "Daniel";
let substr = " Leite";
let result = ensureRight(value, substr);
// result => "Daniel Leite";
```

## first([value], [n])

Return the first n chars of string.

#### Usage
```es6
import {first} from 'strman'

let value = "Daniel";
let result = first(value, 2);
// result => "Da";
```

## last([value], [n])

Return the last n chars of string.

#### Usage
```es6
import {last} from 'strman'

let value = "Daniel";
let result = last(value, 2);
// result => "el";
```

## isLowerCase([value], [n])

Verify if is lowerCase

#### Usage
```es6
import {hasLowerCase} from 'strman'

let value = "daniel";
let result = hasLowerCase(value);
// result => true;
```

## isUpperCase([value], [n])

Verify if is upperCase

#### Usage
```es6
import {hasUpperCase} from 'strman'

let value = "DANIEL";
let result = hasUpperCase(value);
// result => true;
```

## indexOf([value], [needle], [offset = 0])

The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.

#### Usage
```es6
import {indexOf} from 'strman'

let value = "daniel";
let result = indexOf(value, "niel");
// result => 2;
```

## lastIndexOf([value], [needle], [offset = 0])

The lastIndexOf() method returns the index within the calling String object of the last occurrence of the specified value, searching backwards from fromIndex. Returns -1 if the value is not found.

#### Usage
```es6
import {lastIndexOf} from 'strman'

let value = "daniel leite";
let result = lastIndexOf(value, "l");
// result => 7;
```

## insert([value], [substr], [index])

Inserts [substr] into the [value] at the [index] provided.

#### Usage
```es6
import {insert} from 'strman'

let value = "foo";
let result = insert(value, " bar", 3);
// result => "foo bar";
```

## length([value])

Returns the length of the string

#### Usage
```es6
import {length} from 'strman'

let value = "foo";
let result = length(value);
// result => 3;
```

## leftPad([value], [length], [char])

Returns a new string of a given length such that the beginning of the string is padded.

#### Usage
```es6
import {leftPad} from 'strman'

let value = "foo";
let result = leftPad(value, 5, '_');
// result => "__foo";
```

## rightPad([value], [length], [char])

Returns a new string of a given length such that the ending of the string is padded.

#### Usage
```es6
import {rightPad} from 'strman'

let value = "foo";
let result = rightPad(value, 5, '_');
// result => "foo__";
```