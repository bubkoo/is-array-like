# is-array-like

> Checks if the given value is an array or an array-like object.


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

- [is-nil](https://github.com/bubkoo/is-nil) - Checks if the given value is null or undefined.
- [is-null](https://github.com/bubkoo/is-null) - Checks if the given value is null.
- [is-length](https://github.com/bubkoo/is-length) - Checks if the given value is a valid array-like length.
- [is-window](https://github.com/bubkoo/is-window) - Checks if the given value is a window object.
