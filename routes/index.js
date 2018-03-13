var express = require('express');
var router = express.Router();
var Book = require('../models/books')

/* GET home page. */
router.get('/', function(req, res, next) {
	Book.find(function(err, docs){
		var bookChunks = [];
		var chunkSize = 3;
		for (var i=0; i<docs.length; i +=chunkSize){
			bookChunks.push(docs.slice(i, i + chunkSize));
		}
		res.render('shop/index', { title: 'MyBroncho Online', books: chunkSize });
	});
});

module.exports = router;
