var connect = require('connect');
var app = connect();
app.use(logger);
app.use('/admin', restrict)
app.use('/admin', admin)
app.use(logger);
app.use(hello);
app.listen(3000);

function restrict(request, response, next){
	var authorization = request.headers.authorization;
	if(!authorization) return next(new Error('Unanthorized'));

	var parts = authorization.split(' ')
	var schema = parts[0]
	var auth = new Buffer(parts[1], 'base64').toString().split(':')
	var user = auth[0]
	var pass = auth[1]

	authenticateWithDatabase(user, pass, function (err) {
		if(err) return next(err);

		next();
	})

}

function admin(request, response, next) {
	switch (req.url) {
		case '/':
			response.end('try /users');
			break;

		case '/users':
			response.setHeader('Content-Type', 'application/json');
			response.end(JSON.stringify(['tobi', 'loki', 'jane']));
			break;
	}
}

function logger(request, response, next) {
	console.log('%s %s', request.method, request.url)
	next()
}

function hello(request, response) {
	response.setHeader('Content-Type', 'text/plain');
	response.end('Hello world');
}