var http = require('http')
var url = require('url')

var server = http.createServer(function(request, response) {
	var queryStr = url.parse(request.url, true)
	
	if(queryStr.pathname === '/api/parsetime') {
		var date = new Date()
		var obj = {
			"hour" : date.getHours(),
			"minute" : date.getMinutes(),
			"second" : date.getSeconds()
		}
	}
	else if(queryStr.pathname === '/api/unixtime') {
		var date = new Date(UNIX_timestamp)
		var obj = {
			"unixtime" : date.toString()
		}
	}

	response.writeHead(200, { 'Content-Type' : 'application/json' })
	response.write(obj.toString())
}).listen(process.argv[2])