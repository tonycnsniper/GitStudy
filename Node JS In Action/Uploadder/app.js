var http = require('http')
var mime = require('mime')
var path = require('path')
var formidable = require('formidable')
var cache = {}
var fs = require('fs')

var server = http.createServer(function(req,res) {
	var filePath = false;
	if(req.url == '/') {
		filePath = 'public/index.html'
	} else {
		filePath = 'public/'+req.url
	}

	var absPath = './' + filePath
	if(req.method == 'POST') {
		upload(req, res)
	} else {
		serverStatic(res, filePath, cache)
	}	
})

function serverStatic(response, filePath, cache) {
	if(cache[filePath]) {
		//find file directly
		sendFile(response, cache[filePath], filePath)
	} else {
		//decide if file existed.
		fs.exists(filePath, function(exists) {
			if(exists) {
				//read file directly
				fs.readFile(filePath, function(err, data) {
					if(err) serverError(response, 404)
					else {
						// no error, we need to store data to cache firstly, read file soon.
						cache[filePath] = data
						sendFile(response, data, filePath)
					}
				})

			} else {
				//return 404 error
				serverError(response, 404)
			}

		})
	}
}

function serverError(response, errorCode) {
	response.writeHead(errorCode, { 'content-type' : 'text/plain'})
	response.write('Error ' +errorCode+ ': No resource found!')
	response.end();
}

function sendFile(response, fileContent, filePath) {
	response.writeHead(200, {'content-type' : mime.lookup(path.basename(filePath))})
	response.end(fileContent)
} 

function upload(request, response) {
	if(!isFormData(request)) {
		serverError(response,400)
		return
	}

	var form = new formidable.IncomingForm();

	form.on('field', function(field, value) {
		console.log(field);
		console.log(value);
	});

	form.on('file', function(name, file){
		console.log(name);
		console.log(file);
		console.log("read file starting...");
	});

	form.on('end', function() {
		response.end('upload complete!')
	});

	form.parse(request, function(err, fields, files){
		console.log(fields);
		console.log(files);
		response.end('upload complete!');
	});

	form.on('progress', function(bytesReceived, bytesExpected){
		var percent = Math.floor(bytesReceived / bytesExpected * 100);
		console.log(percent);
	});
}

function isFormData(request) {
	var type = request.headers['content-type'] || '';
	return type.indexOf('multipart/form-data') == 0;
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

server.listen(8000);