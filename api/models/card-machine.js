var mongoose = require('mongoose');

var schema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  operations: {
    credit: {
      type: Boolean,
      required: false
    },
    debit: {
      type: Boolean,
      required: false
    }
  },
  debit: {
    operationTax: {
      type: Number,
      required: false
    },
    refundTime: {
      type: Number,
      required: false
    }
  },
  credit: {
    refundType: {
      type: Number,
      required: true
    },
    oneTimePaymentTax: {
      type: Number,
      required: false
    },
    taxForInstallments: {
      type: Number,
      required: false
    },
    installmentTax: {
      type: Number,
      required: false
    },
    refundTime: {
      type: Number,
      required: false
    },
    refundInstallments: {
      type: Number,
      required: false
    },
    maximumInstallmentNumber: {
      type: Number,
      required: false
    }
  }
});

mongoose.model('cardMachine', schema);
