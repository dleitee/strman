<p align="center">
<img src="https://github.com/dleitee/strman/blob/master/strman.png?raw=true">
</p>

[![Build Status](https://travis-ci.org/dleitee/strman.svg?branch=master)](https://travis-ci.org/dleitee/strman)

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

## Credits

 - [Stringy](https://github.com/danielstjules/Stringy)

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
  - [x] [between](https://github.com/dleitee/strman#betweenvalue-start-end)
  - [x] [chars](https://github.com/dleitee/strman#charsvalue)
  - [x] [collapseWhitespace](https://github.com/dleitee/strman#collapsewhitespacevalue)
  - [x] [contains](https://github.com/dleitee/strman#containsvalue-needle-casesensitive--true)
  - [x] [containsAll](https://github.com/dleitee/strman#containsallvalue-needles---casesensitive--true)
  - [x] [containsAny](https://github.com/dleitee/strman#containsanyvalue-needles---casesensitive--true)
  - [x] [countSubstr](https://github.com/dleitee/strman#countsubstrvalue-substr-casesensitive--true-allowoverlapping--false)
  - [x] [endsWith](https://github.com/dleitee/strman#endswithvalue-search-positionnull-casesensitivetrue)
  - [x] [ensureLeft](https://github.com/dleitee/strman#ensureleftvalue-substr-casesensitivetrue)
  - [x] [ensureRight](https://github.com/dleitee/strman#ensurerightvalue-substr-casesensitivetrue)
  - [x] [first](https://github.com/dleitee/strman#firstvalue-n)
  - [x] [indexOf](https://github.com/dleitee/strman#indexofvalue-needle-offset--0-casesensitivetrue)
  - [x] [insert](https://github.com/dleitee/strman#insertvalue-substr-index)
  - [x] [isLowerCase](https://github.com/dleitee/strman#islowercasevalue-n)
  - [x] [isString](https://github.com/dleitee/strman#isstringvalue)
  - [x] [isUpperCase](https://github.com/dleitee/strman#isuppercasevalue-n)
  - [x] [last](https://github.com/dleitee/strman#lastvalue-n)
  - [x] [lastIndexOf](https://github.com/dleitee/strman#lastindexofvalue-needle-offset--0-casesensitivetrue)
  - [x] [leftPad](https://github.com/dleitee/strman#leftpadvalue-length-char)
  - [x] [leftTrim](https://github.com/dleitee/strman#lefttrimvalue)
  - [x] [length](https://github.com/dleitee/strman#lengthvalue)
  - [x] [prepend](https://github.com/dleitee/strman#prependvalue-prepend)
  - [x] [prependArray](https://github.com/dleitee/strman#prependarrayvalue-prepend--)
  - [x] [removeLeft](https://github.com/dleitee/strman#removeleftvalue-prefix-casesensitivetrue)
  - [x] [removeNonChars](https://github.com/dleitee/strman#removenoncharsvalue)
  - [x] [removeNonWords](https://github.com/dleitee/strman#removenonwordsvalue-replace)
  - [x] [removeRight](https://github.com/dleitee/strman#removerightvalue-suffix-casesensitivetrue)
  - [x] [removeSpaces](https://github.com/dleitee/strman#removespacesvalue-replace)
  - [x] [repeat](https://github.com/dleitee/strman#repeatvalue-multiplier)
  - [x] [replace](https://github.com/dleitee/strman#replacevalue-search-newvalue-casesensitivetrue)
  - [x] [reverse](https://github.com/dleitee/strman#reversevalue)
  - [x] [rightPad](https://github.com/dleitee/strman#rightpadvalue-length-char)
  - [x] [rightTrim](https://github.com/dleitee/strman#righttrimvalue)
  - [x] [safeTruncate](https://github.com/dleitee/strman#safetruncatevalue-length-append)
  - [x] [shuffle](https://github.com/dleitee/strman#shufflevalue)
  - [x] [slice](https://github.com/dleitee/strman#slicevalue-beginslice-endslice)
  - [x] [slugify](https://github.com/dleitee/strman#slugifystring)
  - [x] [split](https://github.com/dleitee/strman#splitvalue-separator-limit)
  - [x] [startsWith](https://github.com/dleitee/strman#startswithvalue-search-position0)
  - [x] [substr](https://github.com/dleitee/strman#substrvalue-start-length)
  - [x] [surround](https://github.com/dleitee/strman#surroundvalue-substr)
  - [x] [toCamelCase](https://github.com/dleitee/strman#tocamelcasevalue)
  - [x] [toDecamelize](https://github.com/dleitee/strman#todecamelizevalue-chr)
  - [x] [toKebabCase](https://github.com/dleitee/strman#tokebabcasevalue)
  - [x] [toLowerCase](https://github.com/dleitee/strman#tolowercasevalue)
  - [x] [toSnakeCase](https://github.com/dleitee/strman#tosnakecasevalue)
  - [x] [toStudlyCaps](https://github.com/dleitee/strman#tostudlycapsvalue)
  - [x] [toUpperCase](https://github.com/dleitee/strman#touppercasevalue)
  - [x] [trim](https://github.com/dleitee/strman#trimvalue)
  - [x] [truncate](https://github.com/dleitee/strman#truncatevalue-length-append)

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

## endsWith([value], [search], [position=null], [caseSensitive=true])

Test if [value] ends with [search]

```es6
import {endsWith} from 'strman'

let value = "Daniel Leite";
let search = "Leite";
let result = endsWith(value, search);
// result => true;
```

## ensureLeft([value], [substr], [caseSensitive=true])

Ensures that the [value] begins with [substr]. If it doesn't, it's prepended.

```es6
import {ensureLeft} from 'strman'

let value = "Leite";
let substr = "Daniel ";
let result = ensureLeft(value, substr);
// result => "Daniel Leite";
```

## ensureRight([value], [substr], [caseSensitive=true])

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

## indexOf([value], [needle], [offset = 0], [caseSensitive=true])

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
import {isLowerCase} from 'strman'

let value = "daniel";
let result = isLowerCase(value);
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
import {isUpperCase} from 'strman'

let value = "DANIEL";
let result = isUpperCase(value);
// result => true;
```

## last([value], [n])

Return the last n chars of string.

```es6
import {last} from 'strman'

let value = "Daniel";
let result = last(value, 2);
// result => "el";
```

## lastIndexOf([value], [needle], [offset = 0], [caseSensitive=true])

The lastIndexOf method returns the index within the calling String object of the last occurrence of the specified value, searching backwards from fromIndex. Returns -1 if the value is not found.

```es6
import {lastIndexOf} from 'strman'

let value = "daniel leite";
let result = lastIndexOf(value, "l");
// result => 7;
```

## leftPad([value], [length], [char])

Returns a new string of a given length such that the beginning of the string is padded.

```es6
import {leftPad} from 'strman'

let value = "foo";
let result = leftPad(value, 5, '_');
// result => "__foo";
```

## leftTrim([value])

Remove all spaces on left.

```es6
import {leftTrim} from 'strman'

let title = "     Checks whether a string";
let result = leftTrim(title);
// result => "Checks whether a string";
```

## length([value])

Returns the length of the string.

```es6
import {length} from 'strman'

let value = "foo";
let result = length(value);
// result => 3;
```

## prepend([value], ...[prepend])

Prepend Strings [...prepend] on [value].

```es6
import {prepend} from 'strman'

let title = "a";
let result = prepend(title, "b", "c");
// result => "bca";
```

## prependArray([value], [prepend = []])

Prepend Strings on array [prepend] on [value].

```es6
import {prependArray} from 'strman'

let title = "a";
let result = prependArray(title, ["b", "c"]);
// result => "bca";
```

## removeLeft([value], [prefix], [caseSensitive=true])

Returns a new string with the [prefix] removed, if present.

```es6
import {removeLeft} from 'strman'

let title = "preabc";
let result = removeLeft(title, "pre");
// result => "abc";
```

## removeNonChars([value])
`@deprecated use transliterate`
Remove all non valid characters.

```es6
import {removeNonChars} from 'strman'

let title = "áéíóú";
let result = removeNonChars(title);
// result => "aeiou";
```

## removeNonWords([value], [replace])

Remove all non word characters.

```es6
import {removeNonWords} from 'strman'

let title = ".....a";
let result = removeNonWords(title, "");
// result => "a";
```

## removeRight([value], [suffix], [caseSensitive=true])

Returns a new string with the [suffix] removed, if present.

```es6
import {removeRight} from 'strman'

let title = "abcpos";
let result = removeRight(title, "pos");
// result => "abc";
```

## removeSpaces([value], [replace])

Remove all spaces and replace for value.

```es6
import {removeSpaces} from 'strman'

let title = "Remove all spaces and replace for value";
let result = removeSpaces(title, "-");
// result => "Checks-whether-a-string";

let result = removeSpaces(title);
// result => "Checkswhetherastring";
```

## repeat([value], [multiplier])

Returns a repeated string given a multiplier.

```es6
import {repeat} from 'strman'

let result = repeat("a", 4);
// result => "aaaa";
```

## replace([value], [search], [newvalue], [caseSensitive=true])

Replace [search] value to [newvalue]

```es6
import {replace} from 'strman'

let title = "My car is black";
let result = replace(title, "black", "white");
// result => "My car is white";
```

## reverse([value])

Returns a reversed string.

```es6
import {reverse} from 'strman'

let result = reverse("abc");
// result => "cba";
```

## rightPad([value], [length], [char])

Returns a new string of a given length such that the ending of the string is padded.

```es6
import {rightPad} from 'strman'

let value = "foo";
let result = rightPad(value, 5, '_');
// result => "foo__";
```

## rightTrim([value])

Remove all spaces on right.

```es6
import {rightTrim} from 'strman'

let title = "Checks whether a string     ";
let result = rightTrim(title);
// result => "Checks whether a string";
```

## safeTruncate([value], [length], [append])

Truncate the string securely, not cutting a word in half. It always returns the last full word.

```es6
import {safeTruncate} from 'strman'

let title = "Checks whether a string     ";
let result = safeTruncate(title, 9, "...");
// result => "Checks...";
```

## shuffle([value])

It returns a string with its characters in random order.

```es6
import {shuffle} from 'strman'

let title = "strman";
let result = shuffle(title);
// result => "nrtmsa";
```

## slice([value], [beginSlice], [endSlice])

The slice method extracts a section of a string and returns a new string.

```es6
import {slice} from 'strman'

let title = "strman";
let result = slice(title, 1, 3);
// result => "trm";
```
## slugify([String])

Converts a string to a slug.

```es6
import {slugify} from 'strman'

let title = "Converts a string to a slug.";
let result = slugify(title);
// result => "converts-a-string-to-a-slug"
```

## split([value], [separator], [limit])

Alias to split function.

```es6
import {split} from 'strman'

let value = "foo";
let result = substr(split, "");
// result => ["f", "o", "o"];
```

## startsWith([value], [search], [position=0], [caseSensitive=true])

Test if [value] starts with [search]

```es6
import {startsWith} from 'strman'

let value = "Daniel Leite";
let search = "Daniel";
let result = startsWith(value, search);
// result => true;
```

## substr([value], [start], [length])

Alias to substr function.

```es6
import {substr} from 'strman'

let value = "foo";
let result = substr(value, 1);
// result => "oo";
```

## surround([value], [substr])

Surrounds a [value] with the given [substr].

```es6
import {surround} from 'strman'

let value = "foo";
let result = surround(value, "bar");
// result => "barfoobar";
```

## toCamelCase([value])

Transform to camelCase.

```es6
import {toCamelCase} from 'strman'

let value = "camel-case";
let result = toCamelCase(value);
// result => "camelCase";
```

## toDecamelize([value], [chr])

Transform to uncamelcase.

```es6
import {toDecamelize} from 'strman'

let value = "camelCase";
let result = toDecamelize(value);
// result => "camel_case";
```

## toKebabCase([value])

Transform to kebab-case.

```es6
import {toKebabCase} from 'strman'

let value = "camelCase";
let result = toKebabCase(value);
// result => "camel-case";
```

## toLowerCase([value])

Transform to lowercase.

```es6
import {toLowerCase} from 'strman'

let value = "camelCase";
let result = toLowerCase(value);
// result => "camelcase";
```

## toSnakeCase([value])

Transform to snake_case.

```es6
import {toSnakeCase} from 'strman'

let value = "camelCase";
let result = toSnakeCase(value);
// result => "camel_case";
```

## toStudlyCaps([value])

Transform to StudlyCaps.

```es6
import {toStudlyCaps} from 'strman'

let value = "camelCase";
let result = toStudlyCaps(value);
// result => "CamelCase";
```

## toUpperCase([value])

Transform to UPPERCASE.

```es6
import {toUpperCase} from 'strman'

let value = "camelCase";
let result = toUpperCase(value);
// result => "CAMELCASE";
```

## transliterate([value])

Remove all non valid characters.

```es6
import {removeNonChars} from 'strman'

let title = "áéíóú";
let result = removeNonChars(title);
// result => "aeiou";
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

## truncate([value], [length], [append])

Truncate the unsecured form string, cutting the independent string of required position.

```es6
import {truncate} from 'strman'

let title = "Checks whether a string     ";
let result = truncate(title, 7, "...");
// result => "Chec...";
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

