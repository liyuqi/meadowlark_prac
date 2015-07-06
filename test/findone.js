//var mongoose = require('mongoose');


var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
//var format = require('util').format;

//module.exports = function findOne() {
//    MongoClient.connect('mongodb://localhost:27017/test', function (err, db){
//        //if(err) throw err;
//        // Create a collection we want to drop later
//        db.collection('phone').find({_id:'12341'},{limit:1}, function (err, docs) {
//        //test.equal(null, err);
//        //test.equal(null, item);
//            docs.toArray(callback);
//            console.log(docs);
//            db.close();
//
//        //console.log(doc._id);
//        });
//    });
//};


var DbProvider = function(host, port, database) {
    this.dbUrl = "mongodb://"+host+":"+port+"/"+database;
};

DbProvider.prototype.connect = function(callback) {
    var self = this;
    MongoClient.connect(this.dbUrl, function(err, db) {
        self.db = db;
        callback();
    });
};