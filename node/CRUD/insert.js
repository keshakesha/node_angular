var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';

MongoClient.connect(url, function (err, db){
    if(err) throw err;
    var dbo = db.db("mydb");
    var myObj = {'name' : "Kesha", 'email' : 'kek@narola.email'};
    dbo.collection("customers").insertOne(myObj, function (err, res){
        if(err) throw err;
        console.log("Document / Data Inserted");
        db.close();
    });

})