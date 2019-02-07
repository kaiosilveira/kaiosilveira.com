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
   type: {
     type: String,
     required: true
   },
   buyCost: {
     type: Number,
     required: true
   },
   sellCost: {
     type: Number,
     required: false
   },
   supplier: {
     type: String,
     required: true
   },
   amount: {
     type: Number,
     required: true
   },
   minAmount: {
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
     }
   }
 });

 mongoose.model('product', schema);
