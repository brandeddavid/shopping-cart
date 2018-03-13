var Book = require('../models/books');
var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/books');

var books = [
	new Book(
		{
			imagePath: 'http://jennifermelzer.com/wp-content/uploads/2013/12/book.gif',
			title: 'Nodejs Example',
			description: 'Awesome book to learn Nodejs',
			price: 15
		}),
	new Book(
		{
			imagePath: 'http://jennifermelzer.com/wp-content/uploads/2013/12/book.gif',
			title: 'Nodejs Example',
			description: 'Awesome book to learn Nodejs',
			price: 15
		}),
	new Book(
		{
			imagePath: 'http://jennifermelzer.com/wp-content/uploads/2013/12/book.gif',
			title: 'Nodejs Example',
			description: 'Awesome book to learn Nodejs',
			price: 15
		}),
	new Book(
		{
			imagePath: 'http://jennifermelzer.com/wp-content/uploads/2013/12/book.gif',
			title: 'Nodejs Example',
			description: 'Awesome book to learn Nodejs',
			price: 15
		}),
	new Book(
		{
			imagePath: 'http://jennifermelzer.com/wp-content/uploads/2013/12/book.gif',
			title: 'Nodejs Example',
			description: 'Awesome book to learn Nodejs',
			price: 15
		}),
	
	]

var done = 0;

for (var i=0; i<books.length;i++){

	books[i].save(function(err, result){
		done++;

		if (done == books.length){

			exit();
		}
	});
}

function exit(){

	mongoose.disconnect();
}
