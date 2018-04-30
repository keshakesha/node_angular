var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongodb = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/star-wars-quotes';
var db = '';

//Database related things
mongodb.connect(url, function (err, client) {

    if (err) throw err;
    var db = client.db('star-wars-quotes');

    app.post('/quotes', (req, res) => {

        db.collection('quotes').save(req.body, (err, result) => {
            if (err) return console.log(err)

            console.log('saved to database')
            res.redirect('/')
        })
    });
});


app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function (request, response) {
    response.sendFile(__dirname + '/index.html');
});




var server = app.listen(8081, function () {
    console.log("Express Works");
});