var mongoose = require('mongoose');

var schema = mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  avatar: {
    type: String,
    required: false
  },

  aka: {
    type: String,
    required: false
  },

  birthDate: {
    type: Date,
    required: false
  },

  email: {
    type: String,
    required: false
  },

  cellphone: {
    type: String,
    required: false
  },

  telphone: {
    type: String,
    required: false
  },

  observations: {
    type: String,
    required: false
  },

  address: {

    cep: {
      type: String,
      required: false
    },
    number: {
      type: Number,
      required: false
    },
    place: {
      type: String,
      required: false
    },
    complement: {
      type: String,
      required: false
    },
    neighborhood: {
      type: String,
      required: false
    },
    city: {
      type: String,
      required: false
    },
    state: {
      type: String,
      required: false
    }
  }

});

mongoose.model('client', schema);
