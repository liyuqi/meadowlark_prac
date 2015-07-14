var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var server = require('mongodb').Server;

 module.exports = new Db('test',new Server('localhost',Connection.DEFAULT_PORT),{});