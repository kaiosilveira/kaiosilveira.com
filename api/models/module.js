var mongoose = require('mongoose');

var schema = mongoose.Schema({
  title: {
    type: String,
    required: true
  }
});

mongoose.model('module', schema);
