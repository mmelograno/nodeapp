'use strict';

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
  picture_url: {
    type: String,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

const Show = mongoose.model('Show', ShowSchema);
module.exports = {
  Show,
};
