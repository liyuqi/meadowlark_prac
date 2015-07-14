/**
 * Created by yuqili on 2015/7/9.
 */

//;(function(root, undefined)){
//    var Db = require('mongodb').Db;
//    var Connection = require('mongodb').Connection;
//    var server = require('mongodb').Server;
//
//    var db new Db('test',new Server('localhost',Connection.DEFAULT_PORT),{});
//
//}(this));


//var Db = require('mongodb').Db;
//var Connection = require('mongodb').Connection;
//var server = require('mongodb').Server;
//
//var monk = require('monk');
//var dbevents = monk('172.17.24.190:40000/events');


var Db = require('mongodb').Db,
    Server = require('mongodb').Server,
    test = require('assert');
// Connect using single Server
//var db = new Db('test', new Server('localhost', 27017));
var qbox = require('qbox');

function getDoc() {

    var db = new Db('test', new Server('localhost', 27017));
    var $ = qbox.create();


    this.findOne = function findOne(){
        return function getDoc(done){

        }
    };


    db.open(function (err, db) {
        db.collection('vacations').findOne({}, function (err, doc) {
            back =  doc;
            //console.log(doc);
            db.close();
        })
    });
}(this);

module.exports = getDoc;