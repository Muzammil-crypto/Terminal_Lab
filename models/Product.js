const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    default: Date.now
  }
});

const Product = mongoose.model('Product', UserSchema);

module.exports = Product;
