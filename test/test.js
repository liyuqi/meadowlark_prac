/**
 * Created by yuqili on 2015/7/6.
 */
var find = require('./findone.js');
var test = require('./test.js');
//
var result = test.findOne;
var callback = test.callback;
//
//console.log(result);

var MongoClient = require('mongodb').MongoClient;

//function findOne(temp_doc) {
//module.exports = function findOne(temp_doc) {
    var temp_doc;
//    MongoClient.connect('mongodb://localhost:27017/test', function (err, db) {
//        //if(err) throw err;
//        // Create a collection we want to drop later
        db.collection('phone').findOne({_id: '12341'}, function (err, doc) {
            //test.equal(null, err);
            //test.equal(null, item);
            //callback = doc._id;
            //console.log(doc);
            temp_doc = doc._id;
            db.close();
            //console.log(_callback);

        });
//
//    });
//    return temp_doc;
//};

//var _callback = find._callback;
//console.log(_callback);
console.log(callback);


//console.log(getDoc());

var assert     = require('assert');

describe('Find one', function() {
    it('with a failing test', function() {
        //assert(false, 'Welcome');
        assert.deepEqual(callback, ['12341']);
        //expect(doc).to.be('12341');
    });
});


//
//var assert = require('assert');
//
//function validator() {
//    return ['error.nonpositive'];
//}
//
//describe('col.insert', function() {
//    it('insert a new document', function() {
//        //assert(false, 'Welcome');
//    });
//});
//
//describe('col.find', function() {
//    it('find document', function() {
//        //assert(false, 'Welcome');
//    });
//});
//
//describe('col.findOne', function() {
//    it('find a document', function() {
//        //assert(false, 'Welcome');
//    });
//});
//
//describe('col.update', function() {
//    it('update a document', function() {
//        //assert(false, 'Welcome');
//    });
//});
//
//describe('col.upsert', function() {
//    it('update or insert a new document', function() {
//        //assert(false, 'Welcome');
//    });
//});
//
//describe('col.remove', function() {
//    it('remove a document', function() {
//        //assert(false, 'Welcome');
//    });
//});
//
//describe('col.aggregate', function() {
//    it('sum', function() {
//        //assert(false, 'Welcome');
//    });
//});
//
//describe('col.mapReduce', function() {
//    it('failing test', function() {
//        //assert(false, 'Welcome');
//    });
//});