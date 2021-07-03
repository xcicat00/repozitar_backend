var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://xcicat00:karamba81@cluster0.2uczv.mongodb.net/admin?replicaSet=atlas-1048qa-shard-0&readPreference=primary&connectTimeoutMS=10000&authSource=admin&authMechanism=SCRAM-SHA-1&3t.uriVersion=3&3t.connection.name=Lada&3t.databases=admin,test&3t.alwaysShowAuthDB=true&3t.alwaysShowDBFromUserRole=true&3t.sslTlsVersion=TLS";

MongoClient.connect(url,function (err, db){
    if (err) throw err;
    var dbo = db.db("pokus");
    dbo.collection("Kontakty").findOne({Prijmeni: "Cermak"},function(err,kontakt){
    /*dbo.collection("Kontakty").find({Jmeno: "Jan"}).toArray(function(err,kontakt){*/
        if (err) throw err;
        console.log(kontakt);
        db.close();
    });
});