var http = require('http')
var url = require('url')

var server = http.createServer(function(request, response) {
	var queryStr = url.parse(request.url, true)
	var data = {}
	var date = new Date(Date.parse(queryStr.query.iso))
	if(date === null)
		date = new Date()
	if(queryStr.pathname === '/api/parsetime') {
		data = {
			"hour" : date.getHours(),
			"minute" : date.getMinutes(),
			"second" : date.getSeconds()
		}
	}
	else if(queryStr.pathname === '/api/unixtime') {
		data = {
			"unixtime" : date.getTime()
		}
	}
	response.writeHead(200, { 'Content-Type' : 'application/json' })
	response.write(JSON.stringify(data))
}).listen(process.argv[2])