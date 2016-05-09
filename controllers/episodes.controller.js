const mongoose = require('mongoose');
require('../models/episodes.models');
const Episode = mongoose.model('Episode');

require('bluebird').promisifyAll(mongoose);

/**
 * getEpisodes() returns episodes
 * from mongoDb
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 * @return {Array} episodes
 */
exports.getEpisodes = function (req, res, next) {
  Episode
    .find({})
    // only select name to return
    .populate('_show', 'name')
    .execAsync()
    .then(episodes => res.json(episodes))
    .catch(err => res.status(400).send(err));
};

/* eslint-disable new-cap */

/**
 * addEpisode() adds new episode
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 * @return {Object} episode
 */
exports.addEpisode = function (req, res, next) {
  const newEpisode = Episode({
    title: req.body.title,
    description: req.body.description,
    duration: req.body.duration,
    season: req.body.season,
    episode: req.body.episode,
    _show: req.body.show,
  });

  newEpisode.saveAsync()
    .then(episode => res.json(episode))
    .catch(err => res.status(400).send(err));
};
