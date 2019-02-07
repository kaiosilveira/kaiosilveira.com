var mongoose = require('mongoose');
var model = mongoose.model('resource');
var resourcesController = {};

resourcesController.list = function(req, res) {

  model
  .find()
  .then(
    data => res.json(data),
    err => {
      console.log(err);
      res.status(500).json(err);
  });

}

resourcesController.post = function(req, res) {

  model.create(req.body)
  .then(
    resource => res.status(201).json(resource),
    err => {
      console.log(err);
      res.status(500).json(err);
  });

}

resourcesController.getById = function(req, res) {

  model
  .findOne({ _id: req.params.id })
  .then(
    data => res.json(data),
    err => {
      console.log(err);
      res.status(500).json(err);
  });

}

resourcesController.update = function(req, res) {

  model
  .findByIdAndUpdate(req.params.id, req.body)
  .then(
    resource => res.status(200).end(),
    err => res.status(500).json(err)
  );

}

resourcesController.delete = function(req, res) {

  model
  .remove({ _id: req.params.id })
  .then(
    result => res.end(),
    err => res.status(500).json(err)
  );

}

module.exports = resourcesController;
