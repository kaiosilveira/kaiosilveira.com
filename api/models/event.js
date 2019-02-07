var mongoose = require('mongoose');

var schema = mongoose.Schema({

  professionalId: {
    type: String,
    required: true
  },
  clientId: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  from: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  },
  servicesIds: {
    type: Array,
    required: true
  },
  obs: {
    type: String,
    required: false
  }

});

mongoose.model('event', schema);
