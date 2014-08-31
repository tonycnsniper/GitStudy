var http = require('http')
var mime = require('mime')
var path = require('path')
var cache = {}
var fs = require('fs')

var server = http.createServer(function(req,res) {
	if(req.method == 'POST') {
		upload(req, res)
	}



	var filePath = false;
	if(req.url == '/') {
		filePath = 'public/index.html'
	} else {
		filePath = 'public/'+req.url
	}

	var absPath = './' + filePath
	serverStatic(res, filePath, cache)
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
	
}

server.listen(8000);