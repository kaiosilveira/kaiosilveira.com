var mongoose = require('mongoose');

var schema = mongoose.Schema({

  orderId: {
    type: String,
    required: true
  },

  type: {
    money: {
      type: Boolean,
      required: false
    },
    credit: {
      type: Boolean,
      required: false
    },
    debit: {
      type: Boolean,
      required: false
    }

  },

  credit: {
    installments: {
      type: Number,
      required: false
    },
    machineId: {
      type: String,
      required: false
    },
    amount: {
      type: Number,
      reqiured: false
    }
  },

  debit: {
    machineId: {
      type: String,
      required: false
    },
    amount: {
      type: Number,
      reqiured: false
    }
  },

  money: {
    amount: {
      type: Number,
      reqiured: false
    }
  }


});

mongoose.model('payment', schema);
