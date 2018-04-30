var http = require("http");
var fs = require("fs");

var server = http.createServer(function (request, response) {

    if(request.method === "GET") {

        response.writeHead(200, {'Content-Type' : 'text/html'});
        fs.createReadStream("./public/form.html", "UTF-8").pipe(response);

    } else if(request.method === "POST") {

        console.log("POST Request");
        var data = "";
        request.on("data", function(chunk) {
            data += chunk;            
        });

        request.on ("end", function () {
            response.writeHead(200, {'Content-Type' : 'text/html'});
            response.end(`
                ${data}
            `);
        });
    }

});

server.listen("3000", function () {
    console.log("Listing on 3000");
});
