var connect = require('connect')

var api = connect();
var app = connect();

api.use(users)
   .use(pets)
   .use(errorHandler);

app.use(hello)
   .use('/api', api)
   .use(errorPage)
   .listen(3000);

function hello(request, response, next) {
	if(request.url.match(/^\/hello/)) {
		response.end('Hello World\n');
	} else {
		next();
	}
	next();
}

var db = {
	users : [
		{ name : 'tobi' },
		{ name : 'loki' },
		{ name : 'jane' }
	]
};

function users(request, response, next) {
	var match = request.url.match(/^\/user\/(.+)/)
	if(match) {
		console.log(match[1]);
		console.log(db.users[match[1]]);
		var user = db.users[match[1]];
		if(user) {
			response.setHeader('Content-Type', 'application/json');
			response.end(JSON.stringify(user));
		} else {
			var err = new Error('User not found');
			err.notFound = true;
			next(err);
		}
	} else {
		next();
	}
}

function pets(request, response, next) {
	if(request.url.match('/^\/pet\/(.+)/')) {
		foo();
	} else {
		next();
	}
}

function errorHandler(err, request, response, next) {
	console.error(err.stack); 
	response.setHeader('Content-Type', 'application/json');
	if(err.notFound) {
		response.statusCode = 404;
		response.end(JSON.stringify({ error : err.message }));
	} else {
		response.statusCode = 500;
		respones.end(JSON.stringify({ error : 'Internal Server Error' }));
	}
}

function errorPage(err, request, response, next) {
	// response.setHeader('Content-Type', 'application/json');
	// response.end(JSON.stringify({ error : err.message }));
}