var exec = require("child_process").exec;
var querystring = require("querystring");

function start(repsonse, postData) {
	console.log("Request handler 'start' was called.");
	// function sleep(milliSeconds) {
	// 	var startTime = new Date().getTime();
	// 	while( new Date().getTime() < startTime + milliSeconds) ;
	// }

	// sleep(10000);
	// return "Hello Start";

    var body = '<html>'+
	    '<head>'+
	    '<meta http-equiv="Content-Type" content="text/html; '+
	    'charset=UTF-8" />'+
	    '</head>'+
	    '<body>'+
	    '<form action="/upload" method="post">'+
	    '<textarea name="text" rows="20" cols="60"></textarea>'+
	    '<input type="submit" value="Submit text" />'+
	    '</form>'+
	    '</body>'+
	    '</html>';

	repsonse.writeHead(200, {"Content-Type" : "text/html"});
	repsonse.write(body);
	repsonse.end();
}

function upload(repsonse, postData) {
	console.log("Request handle 'upload' was called.");
	repsonse.writeHead(200, {"Content-Type" : "text/plain"});
	repsonse.write("You've sent the text: " + querystring.parse(postData).text);
	repsonse.end();	
}

exports.start = start;
exports.upload = upload;