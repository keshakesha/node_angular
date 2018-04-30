var MongoDB = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

MongoDB.connect(url, function (err, db) {

    if(err)  throw err;
    var dbo = db.db("mydb");
    // dbo.collection("customers").find({}).toArray (function (err, res) {
    //     if(err) throw err;
    //     console.log(res);
    //     db.close();
    // });
    // var query = {name : 'Kesha'}
    // dbo.collection("customers").find(query).toArray (function (err, res) {
    //     if(err) throw err;
    //     console.log(res);
    //     db.close();
    // });

    // var query = { name : /^K/ };
    // dbo.collection("customers").find(query).toArray (function (err, res) {
    //     if(err) throw err;
    //     console.log(res);
    //     db.close();
    // });

    var sort_by = { name : 1 };
    dbo.collection("customers").find().sort(sort_by).toArray (function (err, res) {
        if(err) throw err;
        console.log(res);
        db.close();
    });

});