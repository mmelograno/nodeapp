'use strict';

const winston = require('winston');
const mongoose = require('mongoose');
require('./model');

const Episode = mongoose.model('Episode');

const QueryBuilder = require('../../lib/QueryBuilder');

// .populate('tags').where('tags.tagName').in(['funny', 'politics']) 
// by
// .populate( 'tags', null, { tagName: { $in: ['funny', 'politics'] } } )

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
  QueryBuilder.search(req.query, req.baseUrl)
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
    .catch((err) => {
      winston.log('error', err.message);
      return res.status(400).send(err);
    });
};

module.exports = {
  addEpisode,
  getEpisodes,
};
