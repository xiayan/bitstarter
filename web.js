var express = require('express');
var fs = require('fs')

var app = express.createServer(express.logger());

var buf = fs.readFileSync("index.html")
var content = buf.toString('utf8', 0, buf.length)

app.get('/', function(request, response) {
  response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
