/**
 * Created by yuqili on 2015/7/6.
 */
//var test = require('./findone.js');
//var util = require('util');
//
//console.log('--'+ test.getDoc);



var assert   = require('assert');
var describe = require('mocha');
//
//describe('Find one', function() {
//    it('with a failing test', function() {
//        //assert(false, 'Welcome');
//        assert.deepEqual(validator(0), ['12341']);
//        //expect(doc).to.be('12341');
//    });
//});

describe('less than 64 bytes', function() {
    it('should be successful', function() {
        expect(md5('')).to.be('d41d8cd98f00b204e9800998ecf8427e');
    });
});

