
var express = require('express');
var mongoose = require('mongoose');

var url = 'mongodb://localhost:27017/test';
global.db = mongoose.createConnection(url);

var routes = require('./routes');

var app = express();
app.get('/', routes.home);
app.get('/insert', routes.insert);
app.get('/name', routes.modelName);
app.get('/cawt', routes.cawt);
app.listen(3000, function() {
  console.log('listening on http://localhost:3000');
});
