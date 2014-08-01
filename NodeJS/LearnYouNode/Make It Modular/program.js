var fs = require('fs');
var path = require('path');
var temp = new Array();

module.exports = function(dirname, extname, callback) {
			fs.readdir(dirname, function(err, data) {
					if(err) return callback(err)
						data.forEach(function(file, index) {
							if(path.extname(file) === '.'+extname) 
								{
									temp.push(file)
								}
						})
						callback(null, temp)					
			})
}
