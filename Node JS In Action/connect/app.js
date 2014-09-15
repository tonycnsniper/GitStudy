var connect = require('connect');
var app = connect();
app.use(logger);
app.use(hello);
app.listen(3000);

function logger(request, response, next) {
	console.log('%s %s', request.method, request.url)
	next()
}

function hello(request, response) {
	response.setHeader('Content-Type', 'text/plain');
	response.end('Hello world');
}