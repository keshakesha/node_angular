// My first testing

var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (request, response) {


    if(request.url === "/") {
        fs.readFile('./public/index.html', 'UTF-8', function (err, html) {
            response.writeHead(200, {'Content-Type' : 'text/html'});
            response.end(html);
        });
    } else if(request.url.match('\.css')) {

        var cssPath = path.join(__dirname, 'public', request.url);
        var fileStream = fs.createReadStream(cssPath, "UTF-8");
        response.writeHead(200, {'Content-Type' : 'text/css'});
        fileStream.pipe(response);
    } else if(request.url.match('\.jpg')) {

        var imagePath = path.join(__dirname, 'public', request.url);
        var fileStream = fs.createReadStream(imagePath);
        response.writeHead(200, {'Content-Type' : 'image/jpg'});
        fileStream.pipe(response);
    } else {
        response.writeHead(404, {'Content-Type' : 'text/html'});
        response.end("404 - Page Not Found");

    }


}).listen(3000);
