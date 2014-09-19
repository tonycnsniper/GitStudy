var connect = require('connect');

process.env.NODE_ENV = 'development';

var app = connect();

app.use(error)
app.use(errorHandler)
.listen(3000)

function error (request, response, next) {
	foo();

	response.setHeader('Content-Type', 'text/plain');
	response.end('hello world');
	next();
}

function errorHandler(err, request, response, next) {
	var env = process.env.NODE_ENV || 'development';
	console.log(env.toString())
	return function(err, request, response, next, env) {
		response.statusCode = 500;

		switch(env) {
			case 'development':
				response.setHeader('Content-Type', 'application/json');
				response.end(JSON.stringify(err));
				break;
			default: 
				response.end('Server error');
		}
	}
	next();
}