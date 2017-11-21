var http = require('http');
var express = require('express'),
  app = express();

app.use(express.static('./public'));

http
.createServer(app)
.listen(3000, function() {
  console.log('Server running at 3000');
});
