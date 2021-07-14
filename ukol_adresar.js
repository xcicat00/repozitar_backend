//https://stackabuse.com/building-a-rest-api-with-node-and-express
// app.use(bodyParser.urlencoded({ extended: false }));
// https://www.youtube.com/watch?v=qZXt1Aom3Cs   (Tutorial na tvorbu ve vue)


var express = require('express');
var app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// This responds with "Hello World" on the homepage
/*app.get('/', function (req, res) {
    console.log("Node vypsal get/");
    res.send('Hello GET');
 })
*/
 
 app.get('/list_user', function (req, res) {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb+srv://xcicat00:karamba81@cluster0.2uczv.mongodb.net/admin?replicaSet=atlas-1048qa-shard-0&readPreference=primary&connectTimeoutMS=10000&authSource=admin&authMechanism=SCRAM-SHA-1&3t.uriVersion=3&3t.connection.name=Lada&3t.databases=admin,test&3t.alwaysShowAuthDB=true&3t.alwaysShowDBFromUserRole=true&3t.sslTlsVersion=TLS";

    MongoClient.connect(url, (err, db) => {
        if (err) throw err;
        var dbo = db.db("pokus");
        dbo.collection("Kontakty").find({}).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          res.send(result);
          db.close();
        });
      });  
});


app.delete('/delete_user/:Prijmeni',  function (req, res) {
  const smazKontakt = req.params.Prijmeni;
  res.send(req.params);
  
  console.log('Prijmeni: ' + smazKontakt);
  
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb+srv://xcicat00:karamba81@cluster0.2uczv.mongodb.net/admin?replicaSet=atlas-1048qa-shard-0&readPreference=primary&connectTimeoutMS=10000&authSource=admin&authMechanism=SCRAM-SHA-1&3t.uriVersion=3&3t.connection.name=Lada&3t.databases=admin,test&3t.alwaysShowAuthDB=true&3t.alwaysShowDBFromUserRole=true&3t.sslTlsVersion=TLS";
  MongoClient.connect(url,function(err,db){
    if (err) throw err;
    var dbo=db.db("pokus");
    var smaz = {Prijmeni:smazKontakt};
    dbo.collection("Kontakty").deleteOne(smaz,function(err,objekt){
        if (err){console.log("Chyba pri mazani");}
        console.log("Kontakt byl smazan!");
        db.close();
    });


});

});


app.post('/vloz_user/:Jmeno/:Prijmeni/:Email/:Tel/:Ulice/:Mesto/:PSC',  function (req, res) {
  var kontakt = [];
  res.send(req.body);
  const jmeno = req.params.Jmeno;
  const prijmeni = req.params.Prijmeni;
  const email = req.params.Email;
  const tel = req.params.Tel;
  const ulice = req.params.Ulice;
  const mesto = req.params.Mesto;
  const psc = req.params.PSC;
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb+srv://xcicat00:karamba81@cluster0.2uczv.mongodb.net/admin?replicaSet=atlas-1048qa-shard-0&readPreference=primary&connectTimeoutMS=10000&authSource=admin&authMechanism=SCRAM-SHA-1&3t.uriVersion=3&3t.connection.name=Lada&3t.databases=admin,test&3t.alwaysShowAuthDB=true&3t.alwaysShowDBFromUserRole=true&3t.sslTlsVersion=TLS";
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    var dbo = db.db("pokus");
    //kontakt = { Jmeno: "Jan", Prijmeni: "Cermak", Email: "jancermal@gmail.cz", Tel:"733455788", Ulice:"Hlavni Trida 14",Mesto:"Benesov",PSC: "49001" };
    kontakt = { Jmeno: jmeno, Prijmeni: prijmeni, Email: email, Tel: tel, Ulice: ulice, Mesto: mesto, PSC: psc };
    dbo.collection("Kontakty").insertOne(kontakt,function(err,res){
        if (err) throw err;
        console.log("Zapsal jsi kontakt do kolekce Kontakty!");  
        db.close();
    });
  });  
});



var server = app.listen(8080, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
})