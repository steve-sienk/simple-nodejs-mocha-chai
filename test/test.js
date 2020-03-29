//var assert = require('assert');
var app = require('../src/app.js');
var assert = require('chai').assert;

describe('app', function() {
  it('adds one to one', function() {
    var result = app(1)
    assert.equal(result, 2, 'addone(1) is 2');
  });
  it('adds one to two', function() {
    var result = app(2)
    assert.equal(result, 3, 'addone(2) is 3');
  });
  it('adds one to -1', function() {
    var result = app(-1)
    assert.equal(result, 0, 'addone(-1) is 0');
  });
  it('adds nothing to INF', function() {
    var result = app(Number.MAX_VALUE)
    assert.equal(result, Number.MAX_VALUE, 'addone(Number.MAX_VALUE) is 0');
  });
  it('adds one to -INF', function() {
    var result = app(Number.MIN_VALUE)
    assert.equal(result, Number.MIN_VALUE+1, 'addone(Number.MAX_VALUE) is 0');
  });
  it('adding to NaN does nothing', function() {
    var result = app(Number.NaN);
    assert.isNaN(result);
  });
});