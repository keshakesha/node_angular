var http = require('http');
var dt = require('./today_date');

var url = require('url');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type' : 'text/html'});
	res.write('I m kesha kapadia<br>');
	res.write('<br>' + req.url + '<br>');
	res.write('Today\'s Date and Time' + dt.myDateTime() + '<br>');
	
	var q = url.parse(req.url, true).query;
	var txt = q.year + " - " + q.month;
	res.write(txt);
	
	
	res.end();
}).listen(8080);
