'use strict';

const winston = require('winston');
const mongoose = require('mongoose');
require('./model');

const Show = mongoose.model('Show');

const QueryBuilder = require('../../lib/QueryBuilder');

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
  QueryBuilder.search(req.query, req.baseUrl)
    .then(shows => res.json(shows))
    .catch(err => res.status(400).send(err));
};

/**
 * getShowsById() returns show
 * from mongoDb
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 * @return {Array} shows
 */
const getShowsById = (req, res, next) => {
  QueryBuilder.searchById(req.params, req.baseUrl)
    .then(show => res.json(show))
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
  getShowsById,
};
