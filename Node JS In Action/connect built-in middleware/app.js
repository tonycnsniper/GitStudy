var connect = require('connect');
var http = require('http');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');

// var app = connect()
// 	//.use(cookieParser('Just a cookie test!!!'))
// 	//.use(function(request, response) {
// 	//	response.setHeader('Set-Cookie','foo=bar');
// 		response.setHeader('Set-Cookie','tobi=ferret; Expires=True, 25 Sep 2014 12:30:13 GMT');
// 		//console.log(request.cookie);
// 		response.end('Hello world\n');
//    })
// 	.use(function(request, response){
// 		//console.log(request.cookie);
// 	})
// 	.use(bodyParser('Just a body parser here!'))
// 	.use(function(request, response){
		
// 	}).listen(3000)

var app = connect()
	.use(connect.logger())
	.use(hello);


function hello(response, response, next) {
	response.end('hello\n');
}

http.createServer(app).listen(3000);