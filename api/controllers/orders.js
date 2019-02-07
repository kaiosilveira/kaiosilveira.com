var mongoose = require('mongoose');
var model = mongoose.model('order');
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

controller.post = function(req, res) {

  model.create(req.body)
  .then(
    order => res.status(201).json(order),
    err => {
      console.log(err);
      res.status(500).json(err);
  });

}

controller.getById = function(req, res) {

  model
  .findOne({ _id: req.params.id })
  .then(
    data => res.json(data),
    err => {
      console.log(err);
      res.status(500).json(err);
  });

}

controller.getByDate = function(req, res) {

  var baseDate = new Date(req.body.date);
  var start = new Date(baseDate.getUTCFullYear(), baseDate.getUTCMonth(), baseDate.getUTCDate(), 0, 0, 0);
  var end = new Date(baseDate.getUTCFullYear(), baseDate.getUTCMonth(), baseDate.getUTCDate(), 23, 59, 59);
  var query = {
    date: {
      $gte: start,
      $lt: end
    }
  };

  model
  .find(query)
  .then(
    data => res.json(data),
    err => {
      console.log(err);
      res.status(500).json(err);
  });

}

controller.update = function(req, res) {

  model
  .findByIdAndUpdate(req.params.id, req.body)
  .then(
    order => res.status(200).end(),
    err => res.status(500).json(err)
  );

}

controller.delete = function(req, res) {

  model
  .remove({ _id: req.params.id })
  .then(
    result => res.end(),
    err => res.status(500).json(err)
  );

}

module.exports = controller;
