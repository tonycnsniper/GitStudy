var net = require('net')
var date = new Date()

function customDateFormat(date) {
	var year = date.getFullYear().toString()
	var month = (date.getMonth() + 1) / 10 >= 1 ? (date.getMonth() + 1).toString() : '0' + (date.getMonth() + 1).toString()
	var day = date.getDate() / 10 >= 1 ? date.getDate().toString() : '0' + date.getDate().toString()
	var hour = date.getHours() / 10 >= 1 ? date.getHours().toString() : '0' + date.getHours().toString()
	var min = date.getMinutes() / 10 >= 1 ? date.getMinutes().toString() : '0' + date.getMinutes().toString()
	return year + '-' + month + '-' + day +' ' + hour + ':' + min + '\n'
}

var server = net.createServer(function(socket) {
	var data = customDateFormat(date)
	socket.end(data)
})
server.listen(Number(process.argv[2]))