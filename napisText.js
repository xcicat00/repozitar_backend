function napisText(callbackParam){

    var http = require('http');
    http.createServer(function(req,res) {
        res.writeHead(200,{'Content-Type': 'text/html'});
        //req.write();
        res.end("Ahoj Svete!");
        console.log("Tak to by byla funkce!")
    }).listen(8080);

    napisText((callbackParam) => {
    console.log(callbackParam);
    });
}