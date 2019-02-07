var mongoose = require('mongoose');

var schema = mongoose.Schema({

  professionalId: {
    type: String,
    required: true
  },
  status: {
    type: Number,
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
  price: {
    type: Number,
    required: true
  },
  obs: {
    type: String,
    required: false
  }

});

mongoose.model('order', schema);
