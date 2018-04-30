var MongoDB = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/mydb';


MongoDB.connect(url, function (err, db) {

    if(err) throw err;
    console.log("Database Created");
    db.close();
});

