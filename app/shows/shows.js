'use strict';

const winston = require('winston');
const mongoose = require('mongoose');
require('./model');

const Show = mongoose.model('Show');

/**
 * getShows() returns shows
 * from mongoDb
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 * @return {Array} shows
 */
const getShows = (req, res, next) => {
  Show
    .find({})
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
const addShow = (req, res, next) => {
  const newShow = Show({
    name: req.body.name,
    description: req.body.description,
  });
  newShow.save()
    .then(show => res.json(show))
    .catch((err) => {
      winston.log('error', err.message);
      return res.status(400).send(err);
    });
};

module.exports = {
  addShow,
  getShows,
};
