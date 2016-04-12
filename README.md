# is-array-like

> Check if the given value is an Array or an Array like object. 


[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/bubkoo/is-array-like/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/bubkoo/is-array-like/master.svg?style=flat-square)](https://travis-ci.org/bubkoo/is-array-like)
[![coverage:?](https://img.shields.io/coveralls/bubkoo/is-array-like/master.svg?style=flat-square)](https://coveralls.io/github/bubkoo/is-array-like)


## Install

```
$ npm install --save is-array-like 
```


## Usage

```js
var isArrayLike = require('is-array-like');

isArrayLike();               // => false
isArrayLike(1);              // => false
isArrayLike('1');            // => false
isArrayLike(true);           // => false
isArrayLike(null);           // => false
isArrayLike({});             // => false
isArrayLike(function () {}); // => false
isArrayLike([]);             // => true
isArrayLike([1, 2, 3]);      // => true

function testArguments() {
  isArrayLike(arguments);
  // => true
}
```

## Related

- [is-window](https://github.com/bubkoo/is-window) - Check if the given value is a window object.
