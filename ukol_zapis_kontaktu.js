var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://xcicat00:karamba81@cluster0.2uczv.mongodb.net/admin?replicaSet=atlas-1048qa-shard-0&readPreference=primary&connectTimeoutMS=10000&authSource=admin&authMechanism=SCRAM-SHA-1&3t.uriVersion=3&3t.connection.name=Lada&3t.databases=admin,test&3t.alwaysShowAuthDB=true&3t.alwaysShowDBFromUserRole=true&3t.sslTlsVersion=TLS";

MongoClient.connect(url,function(err,db){
    if (err) throw err;
    var dbo = db.db("pokus");
    var kontakt = {Jmeno: "Ladislav", Prijmeni: "Cicatko", Email: "l.cicatko@seznam.cz", Tel:"732560036", Ulice:"Vltavska 13",Mesto:"Brno",PSC: "62500"};
    dbo.collection("Kontakty").insertOne(kontakt,function(err,res){
        if (err) throw err;
        console.log("Zapsal jsi kontakt do kolekce Kontakty, Vole!");
        db.close();
    });

});