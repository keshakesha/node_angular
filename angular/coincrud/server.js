// server.js

var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./config/DB'),
    coinRoutes = require('./expressRoutes/coinRoutes');


mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
    () => { console.log('Database is connected') },
    err => { console.log('Can not connect to the database' + err) }
);

const app = express();

app.use(bodyParser.json());
app.use(cors());
var port = process.env.PORT || 4000;
console.log("port");
app.use('/coins', coinRoutes);

var server = app.listen(function () {
    console.log('Listening on port ' + port);
});