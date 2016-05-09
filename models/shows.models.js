const mongoose = require('mongoose');

const ShowSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

const Show = mongoose.model('Show', ShowSchema);
/* eslint-disable object-shorthand */
module.exports = {
  Show: Show,
};
