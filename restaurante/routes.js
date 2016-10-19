
var model = require('./modelA');
console.log(model);
exports.home = function(req, res, next) {
  model.find(function(err, docs) {
    if (err) return next(err);
    res.send(docs);
  });
};

exports.modelName = function(req, res) {
  res.send('my model name is ' + model.modelName);
};


var restaurant =  new model({
	address : {
		building : "351",
		coord : [	-73.98513559999999, 40.7676919],
		street : "West   57 Street",
		zipcode : "10019"
	},
	borough : "Manhattan",
	cuisine : "Irish",
	grades : [
		{
			date : "2016-09-06T00:00:00Z",
			grade : "Z",
			score : 2
		},
		{
			date : "2016-07-22T00:00:00Z",
			grade : "Z",
			score : 11
		},
		{
			date : "2016-07-31T00:00:00Z",
			grade : "Z",
			score : 12
		},
		{
			date : "2016-12-29T00:00:00Z",
			grade : "Z",
			score : 12
		}
	],
	name : "CAWT Cozinha de Rua",
	restaurant_id : "999999991"
});

/*model.save(function (err, data) {
	if (err) console.log(err);
	else console.log('Saved : ', data );
});
*/

exports.insert = function(req, res, next) {
  model.create(restaurant, function(err, doc) {
    if (err) return next(err);
    res.send(doc);
  });
};

exports.cawt = function(req, res, next) {
  var retorno = {'name' : 'CAWT'}

  model.filter(retorno, function(err, docs) {
    if (err) return next(err);
    res.send(docs);
  });
};