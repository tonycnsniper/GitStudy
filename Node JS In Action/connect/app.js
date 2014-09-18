var connect = require('connect');
var url = require('url');
var router = require('./middleware/router');
var app = connect();

app.use(setup(':method :url'));
app.use(rewrite);
app.use('/admin', restrict)
app.use('/admin', admin)
app.use(logger);
app.use(hello);
app.listen(3000);
app.use(router(routes));

function rewrite(request, response, next) {
	var path = url.parse(request.url).pathname;

	function rewrite(request, response, next) {
		var match = path.match(/^\/blog\/posts\/(.+)/);
		if(match) {
			findPostIdBySlug(match[1],function(err, id) {
				if(err) return next(err);
				if(!id) return next(new Error('User not Found'));
				reqest.url = '/blog/posts/' + id;
				next();
			});
		} else {
			next();
		}
	}
}


var routes = {
	GET: {
		'/users': function(request, response) {
			response.end('tobi, loki, ferret');
		},
		'/user/:id': function(request, response, id) {
			response.end('user' + id);
		}
	},
	DELETE: {
		'/user/:id': function(request, response, id) {
			response.end('delete user ' + id);
		}
	}
};

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

function logger(request, response, next) {
	console.log('%s %s', request.method, request.url)
	next()
}

function hello(request, response) {
	response.setHeader('Content-Type', 'text/plain');
	response.end('Hello world');
}