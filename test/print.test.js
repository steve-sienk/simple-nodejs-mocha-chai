//var assert = require('assert');
var sinon = require('sinon')
const print = require('../src/print.js');
var assert = require('chai').assert;

describe('print', function() {
  it('prints to the console', function() {
    let spy = sinon.spy(console, 'log')
    var result = print("hello world")
    assert.isTrue(spy.calledWith("hello world"))
    spy.restore()
  });
});