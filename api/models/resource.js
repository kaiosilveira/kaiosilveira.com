var mongoose = require('mongoose');

var schema = mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  rg: {
    type: String,
    required: false
  },

  cpf: {
    type: String,
    required: false
  },

  bankAccount: {
    agencyNumber: {
      type: String,
      required: false
    },
    accountNumber: {
      type: String,
      required: false
    },
    bankName: {
      type: String,
      required: false
    }
  },

  avatar: {
    type: String,
    required: false
  },

  aka: {
    type: String,
    required: false
  },

  position: {
    type: String,
    required: true
  },

  birthDate: {
    type: Date,
    required: true
  },

  email: {
    type: String,
    required: false
  },

  phone: {
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

mongoose.model('resource', schema);
