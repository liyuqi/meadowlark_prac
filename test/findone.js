//var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
//var db =

var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var server = require('mongodb').Server;

var db = new Db('test',new Server('localhost',27017),{});

var util = require('util');
    function findOne(temp_doc) {
    //var temp_doc;
    MongoClient.connect('mongodb://localhost:27017/test', function (err, db) {
        db.collection('phone').findOne({_id: '12341'}, function (err, doc) {
            //test.equal(null, err);
            //test.equal(null, item);
            _callback = doc._id;
            temp_doc = doc._id;
            db.close();
        });

    });
    return temp_doc;
};
//
//module.exports = fineOne;
//exports.callback = _callback;

var findCallback = function() {
    return findOne();
};

function validator() {
    return '123';
}


//console.log(validator());
//console.log(findOne());
//console.log(temp());
//console.log(_callback);

exports.doc = validator();
exports.result = findOne();
exports.callback = findCallback();

