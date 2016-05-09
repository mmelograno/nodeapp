'use strict';

const mongoose = require('mongoose');
require('../models/shows.models');
const Show = mongoose.model('Show');

require('bluebird').promisifyAll(mongoose);

/**
 * getShows() returns shows
 * from mongoDb
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 * @return {Array} shows
 */
exports.getShows = function (req, res, next) {
  Show
    .find({})
    .execAsync()
    .then(shows => res.json(shows))
    .catch(err => res.status(400).send(err));
};

/**
 * addShow() adds new show
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 * @return {Object} show
 */
exports.addShow = function (req, res, next) {
  const newShow = Show({
    name: req.body.name,
    description: req.body.description,
  });
  newShow.saveAsync()
    .then(show => res.json(show))
    .catch(err => res.status(400).send(err));
};
