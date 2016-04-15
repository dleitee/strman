# strman
A Javascript string manipulation library without npm dependences.

## Install

strman is available on npm:
```
npm install strman --save
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

# Available Functions

- [x] [slugify](https://github.com/dleitee/strman/blob/master/docs/slugify.md)
- [x] [Utils](https://github.com/dleitee/strman/blob/master/docs/utils.md)
  - [x] isString
  - [x] trim
  - [x] rtrim
  - [x] ltrim
  - [x] removeSpaces
  - [x] replace
  - [x] removeNonChars
  - [x] removeNonWords
  - [x] append
  - [x] at
  - [x] between
  - [x] chars
  - [x] collapseWhitespace
  - [x] contains
  - [x] containsAll
  - [x] containsAny
  - [x] countSubstr
  - [x] endsWith
  - [x] startsWith
  - [x] ensureLeft
  - [x] ensureRight
  - [x] first
  - [x] last
  - [x] hasLowerCase
  - [x] hasUpperCase
- [ ] [String Cases](https://github.com/dleitee/strman/blob/master/docs/cases.md)
  - [x] toLowerCase
  - [ ] toUpperCase
  - [ ] toCammelCase
  - [ ] toStudlyCaps
  - [ ] toDecamelize
  - [ ] toSnakeCase
  - [ ] toKebabCase

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

