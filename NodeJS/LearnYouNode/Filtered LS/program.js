var fs = require('fs');
var path = require('path');

var directoryPath = process.argv[2];
var extensionField = '.'+process.argv[3];

fs.readdir(directoryPath, function(err, list) {
	if(err) throw err; 
	for (var i = 0; i <= list.length-1; i++) {
		if(path.extname(list[i]) === extensionField) 
			console.log(list[i]);			
	};	
});

/*
official solution
*/
// fs.readdir(process.argv[2], function(err, list) {
// 	list.forEach(function(file) {
// 		if(path.extname(file) === '.' + process.argv[3])
// 			console.log(file);
// 	})
// })