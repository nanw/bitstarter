var express = require('express');
var fs = require('fs');

//var app = express.createServer(express.logger());
var app = express(express.logger());

app.get('/', function(request, response) {
  var fileBuffer = fs.readFileSync("index.html")
  response.send(fileBuffer.toString());
  //response.send('Hello World2!');
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
