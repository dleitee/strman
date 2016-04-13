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

Checks whether a string

#### Usage
```es6
import {trim} from 'vitjs'

let title = "     Checks whether a string     ";
let result = trim(title);
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

