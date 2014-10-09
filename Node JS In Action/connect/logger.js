var connect = require('connect');

var app = connect()
			.use(setup(':method :url :date'))
			.use(hello)
			.listen(3000);

function setup(format) {
	var regexp = /:(\w+)/g;

	return function logger(request, response, next) {
		var str = format.replace(regexp, function(match, property) {
			return request[property];
		});

		console.log(str);

		next();
	}
}

function hello(req, res, next) {
	res.end('hello');
}