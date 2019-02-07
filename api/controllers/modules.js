var mongoose = require('mongoose');
var model = mongoose.model('module');
var controller = {};

controller.list = function(req, res) {
  model
  .find()
  .then(
    data => res.json(data),
    err => {
      console.log(err);
      res.status(500).json(err);
    });
}

module.exports = controller;
