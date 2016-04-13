'use strict';

var expect = require('chai').expect;


describe('is-array-like', function () {

  var isArrayLike = require('../../');

  it('common test', function () {
    expect(isArrayLike()).to.be.false;

    expect(isArrayLike(1)).to.be.false;

    expect(isArrayLike('1')).to.be.false;

    expect(isArrayLike(true)).to.be.false;

    expect(isArrayLike(null)).to.be.false;

    expect(isArrayLike({})).to.be.false;

    expect(isArrayLike(function () {})).to.be.false;

    expect(isArrayLike([])).to.be.true;

    expect(isArrayLike([1, 2])).to.be.true;
  });

  it('isArrayLike(arguments)', function () {
    expect(isArrayLike(arguments)).to.be.true;
  });

  it('isArrayLike(nodeList)', function () {

    var nodeList = {};

    nodeList.nodeType = 1;
    nodeList.length   = 1;

    expect(isArrayLike(nodeList)).to.be.true;
  });

  it('isArrayLike(arrayLike)', function () {

    var arrayLike = {};

    arrayLike['2']   = 'a';
    arrayLike.length = 3;

    expect(isArrayLike(arrayLike)).to.be.true;
  });
});
