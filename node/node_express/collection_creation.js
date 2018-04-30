var mongodb = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

mongodb.connect(url, function (err, db) {
    if(err) throw err;
    var dbo = db.db("star-wars-quotes");
    dbo.createCollection("quotes", function (err, res) {
        if(err) throw err;
        console.log("Table / Collection Created");
        db.close();
    });
});