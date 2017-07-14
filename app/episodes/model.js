'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

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
    type: Schema.Types.ObjectId,
    ref: 'Show',
    required: true,
  },
});

const Episode = mongoose.model('Episode', EpisodesSchema);
module.exports = {
  Episode,
};
