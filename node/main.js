var http = require("http");

http.createServer(function (request, response) {

response.writeHead(200, {'Content-Type' : 'text/plain'});
response.end("Hello, Kesha Kapadia");

}).listen(8081);

console.log("Appplication is running without any error...");

