
var express = require('express');
var mongoose = require('mongoose');

var url = 'mongodb://localhost:27017/test';
global.db = mongoose.createConnection(url);

var routes = require('./routes');

var app = express();
app.get('/', routes.home);
app.get('/insert', routes.insert);
app.get('/name', routes.modelName);
app.get('/buscar/:id', routes.buscar)

app.listen(8000, function() {
  console.log('listening on http://localhost:8000');
});
