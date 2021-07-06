var express = require('express');
var app = express();

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
    console.log("Node vypsal get/");
    res.send('Hello GET');
 })

 
 app.get('/list_user', function (req, res) {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb+srv://xcicat00:karamba81@cluster0.2uczv.mongodb.net/admin?replicaSet=atlas-1048qa-shard-0&readPreference=primary&connectTimeoutMS=10000&authSource=admin&authMechanism=SCRAM-SHA-1&3t.uriVersion=3&3t.connection.name=Lada&3t.databases=admin,test&3t.alwaysShowAuthDB=true&3t.alwaysShowDBFromUserRole=true&3t.sslTlsVersion=TLS";

    MongoClient.connect(url, (err, db) => {
        if (err) throw err;
        var dbo = db.db("pokus");
        dbo.collection("Adresar").find({}).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          res.send(result);
          db.close();
        });
      });  
});


var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
})