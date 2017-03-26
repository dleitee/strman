<p align="center">
<img src="https://github.com/dleitee/strman/blob/master/strman_new.png?raw=true">
</p>

[![Build Status](https://travis-ci.org/dleitee/strman.svg?branch=master)](https://travis-ci.org/dleitee/strman)
[![Coverage Status](https://coveralls.io/repos/github/dleitee/strman/badge.svg?branch=master)](https://coveralls.io/github/dleitee/strman?branch=master)
[![Code Climate](https://codeclimate.com/github/dleitee/strman/badges/gpa.svg)](https://codeclimate.com/github/dleitee/strman)

A Javascript string manipulation library.

## Install

strman v2.0.0 is available on npm/yarn:
```
npm install strman --save
yarn add strman
```

## Documentation

[https://dleitee.github.io/strman/](https://dleitee.github.io/strman/)

## Usage

### With ES6/import

```javascript
import { slugify } from 'strman'

const  title = "A Javascript string manipulation library.";
slugify(title);
// => "a-javascript-string-manipulation-library"
```

### With require

```javascript
const slugify = require('strman').slugify;

const title = 'A Javascript string manipulation library.'
slugify(title)
// => "a-javascript-string-manipulation-library"
```

## Credits

 - [Stringy](https://github.com/danielstjules/Stringy)


# Contributing

Want to contribute? [Follow these recommendations.](https://github.com/dleitee/strman/blob/master/CONTRIBUTING.md)

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

