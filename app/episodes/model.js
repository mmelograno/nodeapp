'use strict';

const mongoose = require('mongoose');

const defaultOptions = {
  __v: 0,
};

const EpisodesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  duration: {
    type: Number,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  season: {
    type: Number,
    required: true,
  },
  episode: {
    type: Number,
    required: true,
  },
  picture_url: {
    type: String,
  },
  show: {
    type: String,
    required: true,
    lowercase: true,
    onPopulate: (doc) => {
      const Show = mongoose.model('Show');
      return Show.findOne({ id: doc.show }, defaultOptions).lean();
    },
  },
});

const Episode = mongoose.model('Episode', EpisodesSchema);
module.exports = {
  Episode,
};
