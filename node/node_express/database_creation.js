var mongoDB = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/star-wars-quotes';

mongoDB.connect(url, function (err, db ) {
    if(err) throw err;
    console.log("database created...");
    db.close();
});
