var express = require('express');
var router = express.Router();
var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var mongoUrl = 'mongodb://localhost:27017/dclist';

var db;

MongoClient.connect(mongoUrl, function(error, database){
	db = database;
	console.log(error);
});


router.get('/students', function(req, res, next) {
	db.collection('students').find().toArray(function(error, studentResult){
		var studentNames = [];
		for(i = 0; i < studentResult.length; i++){
			studentNames.push(studentResult[i].name);
		}
		res.json(studentNames);
	});
		
});

router.get('/students/reverse', function(req, res, next) {
	db.collection('students').find().toArray(function(error, studentResult){
		var studentNames = [];
		for(i = 0; i < studentResult.length; i++){
			studentNames.push(studentResult[i].name);
		}
		res.json(studentNames.sort());
	});
		
});





module.exports = router;
