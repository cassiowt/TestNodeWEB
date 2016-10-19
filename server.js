var express = require('express');

var app = express();

var port = process.env.PORT || 3000

app.listen(port, function() {
	console.log('rolou');
});

app.get('/', function(req, res) {
	res.end('funcionou');
})

app.get('/func', function(req, res) {
	res.end('funcionou tambêm');
})