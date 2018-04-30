var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {

    fs.readFile('index.html', function (err, data) {

        res.writeHead(200, { 'content-Type': 'text/html' });
        res.write("Hello I m from JS file")
        res.end(data);
    });

fs.appendFile('data.txt', 'Appending Data' , function (err) {
    if(err)
    throw err;
    console.log("helloooooo");    
});


});


server.listen(8080, function (err) {
    console.log("Here, Page is working on 8080 port.");
});

