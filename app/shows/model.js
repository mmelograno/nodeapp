'use strict';

const mongoose = require('mongoose');

const defaultOptions = {
  __v: 0,
};

const ShowSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
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
  episodes: {
    type: Object,
    onPopulate: (doc) => {
      const Episode = mongoose.model('Episode');
      return Episode.find({ show: doc.id }, defaultOptions).lean();
    },
  },
});

const Show = mongoose.model('Show', ShowSchema);
module.exports = {
  Show,
};
