const Episode = require('../models/episodes.models').Episode;

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
    .populate('_show', 'name')
    .exec((err, episodes) => {
      if (err) return res.status(400).send(err);
      return res.json(episodes);
    });
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

  newEpisode.save((err, episode) => {
    if (err) return res.status(400).send(err);
    return res.json(episode);
  });
};
