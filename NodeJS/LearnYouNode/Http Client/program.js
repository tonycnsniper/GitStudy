var http = require('http');

http.get(process.argv[2] , function(response) {
	response.on('data', console.log)
	response.setEncoding('utf8')
	response.on('error', console.error)
})