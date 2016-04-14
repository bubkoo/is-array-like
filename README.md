# is-array-like

> Checks if the given value is an array or array-like object.


[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/bubkoo/is-array-like/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/bubkoo/is-array-like/master.svg?style=flat-square)](https://travis-ci.org/bubkoo/is-array-like)
[![coverage:?](https://img.shields.io/coveralls/bubkoo/is-array-like/master.svg?style=flat-square)](https://coveralls.io/github/bubkoo/is-array-like)


## Install

```
$ npm install --save is-array-like 
```


## Usage

> For more use-cases see the [tests](https://github.com/bubkoo/is-array-like/blob/master/test/spec/index.js)


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

- [is-index](https://github.com/bubkoo/is-index) - Checks if the given value is a valid array-like index.
- [is-length](https://github.com/bubkoo/is-length) - Checks if the given value is a valid array-like length.
- [to-length](https://github.com/bubkoo/to-length) - Converts value to an integer suitable for use as the length of an array-like object.
- [pick-item](https://github.com/bubkoo/pick-item) - Randomly sampling a item from an array.
- [pick-items](https://github.com/bubkoo/pick-items) - Randomly sampling some items from an array. 
- [drop-left](https://github.com/bubkoo/drop-left) - Creates a slice of array with n elements dropped from the beginning.
- [drop-right](https://github.com/bubkoo/drop-right) - Creates a slice of array with n elements dropped from the end.
- [shuffle-arr](https://github.com/bubkoo/shuffle-arr) - Randomize the order of the elements in an array or array-like object). 
