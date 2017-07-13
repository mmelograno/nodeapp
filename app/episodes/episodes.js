'use strict';

const mongoose = require('mongoose');
require('./model');

const Episode = mongoose.model('Episode');

/**
 * getEpisodes() returns episodes
 * from mongoDb
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 * @return {Array} episodes
 */
const getEpisodes = (req, res, next) => {
  Episode
    .find({})
    // only select name to return
    .populate('_show', 'name')
    .then(episodes => res.json(episodes))
    .catch(err => res.status(400).send(err));
};

/**
 * addEpisode() adds new episode
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 * @return {Object} episode
 */
const addEpisode = (req, res, next) => {
  const newEpisode = Episode({
    title: req.body.title,
    description: req.body.description,
    duration: req.body.duration,
    season: req.body.season,
    episode: req.body.episode,
    _show: req.body.show,
  });

  newEpisode.save()
    .then(episode => res.json(episode))
    .catch(err => res.status(400).send(err));
};

module.exports = {
  addEpisode,
  getEpisodes,
};
