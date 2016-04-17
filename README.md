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

  - [x] append
  - [x] appendArray
  - [x] at
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

