var mongoose = require('mongoose');

var schema = mongoose.Schema({

  name: {
    type: String,
    required: true
  },
  login: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }

});

mongoose.model('user', schema);
