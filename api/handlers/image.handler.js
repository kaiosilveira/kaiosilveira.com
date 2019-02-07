var fs = require('fs');

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

module.exports = function(app) {
  app.post("/upload/image",function(req, res) {

    var path = 'files/avatars/' + guid() + '.' + req.headers.fileextension;

    req.pipe(fs.createWriteStream(path))

      .on('finish', function(){
             console.log('arquivo escrito');
            res.status(201).send(path);
      });
  });
}
