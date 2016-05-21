var http = require("http");
var Primus = require("primus");

var server = http.createServer();
var primus = new Primus(server);
var port = process.env.PORT || 80;
var id = require('os').hostname();

server.listen(port);
console.log('id:', id, 'port', port);

primus.on("connection", function (spark) {
  console.log('connected = ' + id);
  setInterval(function() {
    spark.write("Nathan  ID: " + id);
  }, 1000);
});
