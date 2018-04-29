var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.locals.pagetitle = 'Site Name: '; 
app.get('/', function (req, res){
    res.render('default',
    {
        title : 'Hello World',
        classname : "hello"        
    });
});

app.get('/about-us', function (req, res){
    res.render('default',
    {
        title : 'About US',
        classname : "about_us"        
    });
});

app.get('/', function (req, res) {
    res.send("hello <h1>express</h1>");
});

app.get('/hello', function (req, res) {
    res.send("I am from hello");
});

app.get('/hello/:name', function (req, res) {
    var name = req.params.name;
    res.send("My name is " + name);
});

app.get('*', function (req, res) {    
    res.send("Oooops");
});

var server = app.listen(3000, function () {
    console.log("Application is owrking on 3000");
})