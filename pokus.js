/* deklarace finaln9ho callbacku
tento se pouziva az na uplnem konci kodu funkce
myFunction((callbackParam) => {
console.log(callbackParam);
}); */

/* lepe posefovana predchozi varianta
if (require.main) {
myFunction((callbackParam) => {
console.log(callbackParam);
});
}
*/

function pokus(callbackParam){

    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb+srv://xcicat00:karamba81@cluster0.2uczv.mongodb.net/admin?replicaSet=atlas-1048qa-shard-0&readPreference=primary&connectTimeoutMS=10000&authSource=admin&authMechanism=SCRAM-SHA-1&3t.uriVersion=3&3t.connection.name=Lada&3t.databases=admin,test&3t.alwaysShowAuthDB=true&3t.alwaysShowDBFromUserRole=true&3t.sslTlsVersion=TLS";
    var kontakt = ["Ladislav", "Cicatko"];

    return callbackParam (null,kontakt);


    pokus((url,DBname,collectionName,callbackParam) => {
    console.log(callbackParam);
    }); 

};