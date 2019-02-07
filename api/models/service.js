var mongoose = require('mongoose');

var schema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  category: {
    type: String,
    required: false
  },
  products: {
    type: Array,
    required: false
  },
  price: {
    type: Number,
    required: true
  },
  maximumDiscount: {
    type: Number,
    required: true
  },
  averageDuration: {
    type: Number,
    required: true
  },
  comission: {
    type: {
      type: String,
      required: false
    },
    value: {
      type: Number,
      required: false
    },
    discountPaymentTax: {
      type: Boolean,
      required: false
    },
    discountProduct: {
      type: Boolean,
      required: false
    }
  }
});

mongoose.model('service', schema);
