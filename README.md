# strman 
![build](https://travis-ci.org/dleitee/strman.svg?branch=master)

A Javascript string manipulation library without npm dependences.

## Install

strman is available on npm:
```
npm install strman --save
```

or bower:
```
bower install strman
```

## Usage

### With ES6/import

```javascript
import {slugify} from 'strman';

let title = "A Javascript string manipulation library.";
let result = slugify(title);
// result => "a-javascript-string-manipulation-library"
```

### With require

```javascript
var slugify = require('strman').slugify;

let title = "A Javascript string manipulation library.";
let result = slugify(title);
// result => "a-javascript-string-manipulation-library"
```

### With Browser

```html
<script src="./bower_components/strman/dist/strman.js"></script>
```

```javascript
var result = _s.isString('strman');
// result => true
```

Also available for [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD)

# Available Functions

  - [x] [append](https://github.com/dleitee/strman#appendvalue-append)
  - [x] [appendArray](https://github.com/dleitee/strman#appendarrayvalue-append--)
  - [x] [at](https://github.com/dleitee/strman#atvalue-index)
  - [x] between
  - [x] chars
  - [x] collapseWhitespace
  - [x] contains
  - [x] containsAll
  - [x] containsAny
  - [x] countSubstr
  - [x] endsWith
  - [x] ensureLeft
  - [x] ensureRight
  - [x] first
  - [x] includes
  - [x] indexOf
  - [x] insert
  - [x] isLowerCase
  - [x] isString
  - [x] isUpperCase
  - [x] last
  - [x] lastIndexOf
  - [x] leftPad
  - [x] length
  - [x] ltrim
  - [x] prepend
  - [x] prependArray
  - [x] removeLeft
  - [x] removeNonChars
  - [x] removeNonWords
  - [x] removeRight
  - [x] removeSpaces
  - [x] repeat
  - [x] replace
  - [x] reverse
  - [x] rightPad
  - [x] rtrim
  - [x] safeTruncate
  - [x] shuffle
  - [x] slice
  - [x] slugify
  - [x] split
  - [x] startsWith
  - [x] substr
  - [x] surround
  - [x] toCamelCase
  - [x] toDecamelize
  - [x] toKebabCase
  - [x] toLowerCase
  - [x] toSnakeCase
  - [x] toStudlyCaps
  - [x] toUpperCase
  - [x] trim
  - [x] truncate

## append([value], ...[append])

Method to add [...append] on the end of [value].

```es6
import {append} from 'strman'

let title = "s";
let result = append(title, "tr", "m", "an");
// result => "strman";
```

## appendArray([value], [append = []])

Method to add [append[]] on the end of [value].

```es6
import {append} from 'strman'

let title = "s";
let result = append(title, ["tr", "m", "an"]);
// result => "strman";
```

## at([value], [index])

Get the character of the [index].

```es6
import {at} from 'strman'

let title = "abc";
let result = at(title, 1);
// result => "b";
```

## between([value], [start], [end])

Returns array with strings between [start] and [end].

```es6
import {between} from 'strman'

let title = "[abc][def]";
let result = between(title, "[", "]");
// result => ["abc", "def"];
```

## chars([value])

Returns an array consisting of the characters in the string.

```es6
import {chars} from 'strman'

let title = "abc";
let result = chars(title);
// result => ["a", "b", "c"];
```

## collapseWhitespace([value])

Replaces consecutive whitespace characters with a single space.

```es6
import {collapseWhitespace} from 'strman'

let title = "   a    b   c    ";
let result = collapseWhitespace(title);
// result => "a b c";
```

## contains([value], [needle], [caseSensitive = true])

Verifies that the needle is contained in value.

```es6
import {contains} from 'strman'

let title = "Daniel Leite";
let needle = "Leite";
let result = contains(title, needle, true);
// result => true;
```

## containsAll([value], [needles = []], [caseSensitive = true])

Verifies that all needles are contained in value.

```es6
import {containsAll} from 'strman'

let title = "Daniel Leite";
let needles = ["Leite", "Daniel"];
let result = containsAll(title, needles, true);
// result => true;
```

## containsAny([value], [needles = []], [caseSensitive = true])

Verifies that one or more of needles are contained in value.

```es6
import {containsAny} from 'strman'

let title = "Daniel Leite";
let needles = ["Leite", "Daniel", "Oliveira"];
let result = containsAny(title, needles, true);
// result => true;
```

## countSubstr([value], [substr], [caseSensitive = true], [allowOverlapping = false])

Count the number of times substr appears in value.

```es6
import {countSubstr} from 'strman'

let title = "Daniel Leite";
let substr = "Leite";
let result = countSubstr(title, substr);
// result => 1;
```

## endsWith([value], [search], [position=null])

Test if [value] ends with [search]

```es6
import {endsWith} from 'strman'

let value = "Daniel Leite";
let search = "Leite";
let result = endsWith(value, search);
// result => true;
```

## ensureLeft([value], [substr])

Ensures that the [value] begins with [substr]. If it doesn't, it's prepended.

```es6
import {ensureLeft} from 'strman'

let value = "Leite";
let substr = "Daniel ";
let result = ensureLeft(value, substr);
// result => "Daniel Leite";
```

## ensureRight([value], [substr])

Ensures that the [value] ends with [substr]. If it doesn't, it's appended.

```es6
import {ensureRight} from 'strman'

let value = "Daniel";
let substr = " Leite";
let result = ensureRight(value, substr);
// result => "Daniel Leite";
```

## first([value], [n])

Return the first n chars of string.

```es6
import {first} from 'strman'

let value = "Daniel";
let result = first(value, 2);
// result => "Da";
```

## includes

Verifies that the needle is contained in value.

```es6
import {includes} from 'strman'

let title = "Daniel Leite";
let needle = "Leite";
let result = includes(title, needle, true);
// result => true;
```

## indexOf([value], [needle], [offset = 0])

The indexOf method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.

```es6
import {indexOf} from 'strman'

let value = "daniel";
let result = indexOf(value, "niel");
// result => 2;
```

## insert([value], [substr], [index])

Inserts [substr] into the [value] at the [index] provided.

```es6
import {insert} from 'strman'

let value = "foo";
let result = insert(value, " bar", 3);
// result => "foo bar";
```

## isLowerCase([value], [n])

Verify if is lowerCase.

```es6
import {hasLowerCase} from 'strman'

let value = "daniel";
let result = hasLowerCase(value);
// result => true;
```

## isString([value])

Checks whether a string

```es6
import {isString} from 'strman'

let title = "Checks whether a string";
let result = isString(title);
// result => true

let number = 1;
let result = isString(number);
// result => false
```

## isUpperCase([value], [n])

Verify if is upperCase.

```es6
import {hasUpperCase} from 'strman'

let value = "DANIEL";
let result = hasUpperCase(value);
// result => true;
```


# LICENSE

The MIT License (MIT)

Copyright (c) 2015 Daniel Leite de Oliveira

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

