/*var napisText = require('./napisText');

napisText(function(req,res){
   // if (err) throw err;
});

*/

var pokus = require('./pokus');
var url = "mongodb+srv://xcicat00:karamba81@cluster0.2uczv.mongodb.net/admin?replicaSet=atlas-1048qa-shard-0&readPreference=primary&connectTimeoutMS=10000&authSource=admin&authMechanism=SCRAM-SHA-1&3t.uriVersion=3&3t.connection.name=Lada&3t.databases=admin,test&3t.alwaysShowAuthDB=true&3t.alwaysShowDBFromUserRole=true&3t.sslTlsVersion=TLS"; 
var DBname = "pokus";
var kolekce = "Kontakty"
pokus(function(err,vypis){
    if (err) throw err;
    console.log(vypis);
});