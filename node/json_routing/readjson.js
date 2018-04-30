var http = require("http");
var staff = require("./public/data/staff.json");

var server = http.createServer(function (request, response) {

    if(request.url === '/') {

        response.writeHead(200, {'Content-Type' : 'text/json'});
        response.end(JSON.stringify(staff));
    } else if(request.url === "/node.js" ) {

        var search_data = staff.filter(function (item) {
            return item.language === "node.js";
        });
        response.writeHead(200, {'Content-Type' : 'text/json'});
        response.end(JSON.stringify(search_data));
        
    }


});

server.listen("3000", function () {
    console.log("Listing on 3000");
});
