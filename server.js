var http = require("http");
var Primus = require("primus");

var server = http.createServer();
var primus = new Primus(server);
var port = process.env.PORT || 80;
var id = require('os').hostname();
var data = process.env.TEST_DATA || 'fb2 data'
server.listen(port);
console.log('id:', id, 'port', port);

server.on('request', function (req, res) {
    res.end(data + ' url: ' + req.url)
})

primus.on("connection", function (spark) {
  console.log('connected = ' + id);
  setInterval(function() {
    spark.write("fb2!!!!!!!!!!!!!!!!!! time: " + new Date().getTime() +" ID: " + id);
  }, 1000);
});
