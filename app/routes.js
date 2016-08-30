// app/routes.js
var request = require('request');

module.exports = function(app) {

  app.get('/api/time', function(req, res) {
    request("http://chronic.heroku.com/pdt/now", function(error, response, body) {
      if (error) {
        console.log('Something went wrong with fetching time', error);
        res.send(error);
      } else {
        res.send(body);
      }
    });
  });

	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};