//lets require/import the mongoose native drivers.
var mongoose = require('mongoose');


// Connection URL. This is where your mongoose server is running.
var url = 'mongodb://localhost:27017/test';

// Use connect method to connect to the Server

mongoose.connect(url, function(error,  result){
	if (error) throw error;
	console.log(result);
}) ;

