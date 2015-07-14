/**
 * Created by yuqili on 2015/7/9.
 */

mongo_instance = require('../src/mongo_module.js');
expect = require('expect.js');
require('./mongo_test.js');


var Db = require('mongodb').Db,
    Server = require('mongodb').Server,
    test = require('assert');
// Connect using single Server
var db = new Db('test', new Server('localhost', 27017));

//(function(db) {
//    describe('mongodb', function() {
//        describe('Create', function() {
//            it('should be inserted '){
//                db.collection.insert(,)
//                expect().to.be('12341');
//            }
//        };
//        describe('Readit', function() {};
//        describe('Update', function() {};
//        describe('Delete', function() {};
//    };
//})(mongo_instance);

console.log(mongo_instance.getDoc);