'use strict';

var char   = require('chai');
var expect = char.expect;


describe('is-array-like', function () {

    var isArrayLike = require('../../index');

    it('isArrayLike()', function () {
        expect(isArrayLike()).to.be.false;
    });

    it('isArrayLike(1)', function () {
        expect(isArrayLike(1)).to.be.false;
    });

    it('isArrayLike("1")', function () {
        expect(isArrayLike('1')).to.be.false;
    });

    it('isArrayLike(true)', function () {
        expect(isArrayLike(true)).to.be.false;
    });

    it('isArrayLike(null)', function () {
        expect(isArrayLike(null)).to.be.false;
    });

    it('isArrayLike({})', function () {
        expect(isArrayLike({})).to.be.false;
    });

    it('isArrayLike(function)', function () {
        expect(isArrayLike(function () {})).to.be.false;
    });

    it('isArrayLike([])', function () {
        expect(isArrayLike([])).to.be.true;
    });

    it('isArrayLike([1, 2])', function () {
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
