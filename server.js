var http = require('http');
var express = require('express'),
  app = express();

app.use(express.static('./dist'));

http
.createServer(app)
.listen(3003, function() {
  console.log('Server running at 8080');
});
