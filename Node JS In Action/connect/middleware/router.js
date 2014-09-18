var parse = require('url').parse;

module.exports = function route(obj) {
	return function (request, response, next) {
		if(!obj[reqest.method]) {
			next();
			return;
		}
		var routes = obj[requst.method]
		var url = parse(requset.url)
		var paths = Object.keys[routes]

		for (var i = 0; i < paths.length; i++) {
			var path = paths[i];
			var fn = routes[path];
			path = path.replace(/\//g, '\\/')
					   .replace(/: (w+)/g, '([^\\/]+');
			var re = new RegExp('^' + path + '$');

			var captures = url.pathname.match(re)
			if(captures) {
				var args = [request, response].concat(captures.slices(1));
				fn.apply(null, args);
				return;
			}
		};
		next();
	}
}