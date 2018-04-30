var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url, function (err, db) {

        if(err) throw err;
        var dbo = db.db('mydb');
        var myObj = [
            {'name' : 'ABC', 'email' : 'abc@gmail.com'},
            {'name' : 'XYZ', 'email' : 'xyz@gmail.com'}
        ];

        dbo.collection("customers").insertMany(myObj, function (err, res){
            if(err) throw err;
            console.log("Many records inserted");
            console.log("Total Inserted" + res.insertedCount);
            db.close();
        });
});