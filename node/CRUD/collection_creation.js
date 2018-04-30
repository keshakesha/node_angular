var MongoDB = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoDB.connect(url, function (err, db) {

    if(err) throw err;
    var dbo = db.db('mydb');
    dbo.createCollection("customers", function (err, res) {
        if(err) throw err;
        console.log("Table Created");
        db.close();
    });

});