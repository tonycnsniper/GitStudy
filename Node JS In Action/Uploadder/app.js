var http = require('http');

var server = http.createServer(function(req,res) {
	var filePath = false;
	if(req.url == '/') {
		filePath = 'public/index.html'
	} else {
		filePath = 'public/'+req.url
	}
})

server.listen(3000);