var mongoose = require('mongoose');
var model = mongoose.model('payment');
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
    payment => res.status(201).json(payment),
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

controller.getByOrderId = function(req, res) {
  var query = {
    "orderId": req.body.orderId.toString()
  };

  model
  .findOne(query)
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

controller.delete = function(req, res) {

  model.remove({ _id: req.params.id })
  .then(
    result => res.end(),
    err => res.status(500).json(err)
  );

}

module.exports = controller;
