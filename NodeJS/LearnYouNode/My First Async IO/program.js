var fs = require('fs');

var content ;
fs.readFile(process.argv[2], 'utf-8', function(err, data) {
	if(err) {
		console.log(err);
		return ;
	}
	else {
		content = data.split('\n').length - 1;
		console.log(content);
	}
});

