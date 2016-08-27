// app/routes.js

module.exports = function(app) {

	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});


	app.get('/api/time', function(req, res) {
		//get time via some API
	});


};