# String Utils

```es6
import {isString, trim, removeSpaces, replace, removeNonChars} from 'vitjs'
```

## isString([value])

Checks whether a string

#### Usage
```es6
import {isString} from 'vitjs'

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
import {trim} from 'vitjs'

let title = "     Checks whether a string     ";
let result = trim(title);
// result => "Checks whether a string";
```

## ltrim([value])

Remove all spaces on left

#### Usage
```es6
import {ltrim} from 'vitjs'

let title = "     Checks whether a string";
let result = ltrim(title);
// result => "Checks whether a string";
```

## rtrim([value])

Remove all spaces on right

#### Usage
```es6
import {rtrim} from 'vitjs'

let title = "Checks whether a string     ";
let result = rtrim(title);
// result => "Checks whether a string";
```

## removeSpaces([replace])([value])

Remove all spaces and replace for value

#### Usage
```es6
import {removeSpaces} from 'vitjs'

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
import {replace} from 'vitjs'

let title = "My car is black";
let result = replace("black", "white")(title);
// result => "My car is white";
```

## removeNonChars([value])

Remove all non valid characters

#### Usage
```es6
import {removeNonChars} from 'vitjs'

let title = "áéíóú";
let result = removeNonChars(title);
// result => "aeiou";
```

## removeNonWords([replace])([value])

Remove all non word characters

#### Usage
```es6
import {removeNonWords} from 'vitjs'

let title = ".....a";
let result = removeNonWords("")(title);
// result => "a";
```

## append([value], ...[append])

Append Strings on Value

#### Usage
```es6
import {append} from 'vitjs'

let title = "a";
let result = append(title, "b", "c");
// result => "abc";
```

## at([value], [index])

Get the character at index

#### Usage
```es6
import {at} from 'vitjs'

let title = "abc";
let result = at(title, 1);
// result => "b";
```

## between([value], [start], [end])

Returns array with strings between [start] and [end]

#### Usage
```es6
import {between} from 'vitjs'

let title = "[abc][def]";
let result = between(title, "[", "]");
// result => ["abc", "def"];
```

## chars([value])

Returns an array consisting of the characters in the string.

#### Usage
```es6
import {chars} from 'vitjs'

let title = "abc";
let result = chars(title);
// result => ["a", "b", "c"];
```

## collapseWhitespace([value])

Replaces consecutive whitespace characters with a single space

#### Usage
```es6
import {collapseWhitespace} from 'vitjs'

let title = "   a    b   c    ";
let result = collapseWhitespace(title);
// result => "a b c";
```

## contains([value], [needle], [caseSensitive = true])

Verifies that the needle is contained in value

#### Usage
```es6
import {contains} from 'vitjs'

let title = "Daniel Leite";
let needle = "Leite";
let result = contains(title, needle, true);
// result => true;
```

## containsAll([value], [needles], [caseSensitive = true])

Verifies that all needles are contained in value

#### Usage
```es6
import {containsAll} from 'vitjs'

let title = "Daniel Leite";
let needles = ["Leite", "Daniel"];
let result = containsAll(title, needles, true);
// result => true;
```

## containsAny([value], [needles], [caseSensitive = true])

Verifies that one or more of needles are contained in value

#### Usage
```es6
import {containsAny} from 'vitjs'

let title = "Daniel Leite";
let needles = ["Leite", "Daniel", "Oliveira"];
let result = containsAny(title, needles, true);
// result => true;
```

## countSubstr([value], [substr], [caseSensitive = true], [allowOverlapping = false])

Count the number of times substr appears in value

#### Usage
```es6
import {countSubstr} from 'vitjs'

let title = "Daniel Leite";
let substr = "Leite";
let result = countSubstr(title, substr);
// result => 1;
```
