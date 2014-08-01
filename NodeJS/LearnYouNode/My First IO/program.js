var fs = require('fs');
var filePath = process.argv[2];

var buffer = fs.readFileSync(filePath);

var str = buffer.toString();

var strLines = str.split('\n');

console.log(strLines.length-1);