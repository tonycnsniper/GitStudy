var connect = require('connect');
var app = connect();

app.use(error)
app.use(errorHandler())
.listen(3000)

function error (request, response, next) {
	foo();

	response.setHeader('Content-Type', 'text/plain');
	response.end('hello world');
	next();
}

function errorHandler() {
	var env = process.env.NODE_ENV || 'development';
	return function(err, request, response, next) {
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
}