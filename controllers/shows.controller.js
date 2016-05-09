const mongoose = require('mongoose');
require('../models/shows.models');
const Show = mongoose.model('Show');
const config = require('../config/config.js');
const request = require('request-promise');

require('bluebird').promisifyAll(mongoose);

/* eslint-disable new-cap */
function add(s) {
  return new Promise((resolve, reject) => {
    const newShow = Show(s);
    newShow.saveAsync()
      .then(show => resolve(show))
      .catch(err => reject(err));
  });
}

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

function getShowsFromExternalAPI(name) {
  return new Promise((resolve, reject) => {
    const options = {
      uri: config.showsAPI + '?q=' + name,
      json: true,
    };
    request(options)
      .then(response => {
        const showsParsed = response.map((row) => {
          const show = {
            name: row.show.name,
            description: row.show.summary,
          };
          add(show)
            .then(s => console.log(s.name, 'added to db.'));
          return show;
        });
        resolve(showsParsed);
      })
      .catch(err => reject(err));
  });
}

/**
 * getShowsByName() returns shows
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 * @return {Array} shows
 */
exports.getShowsV2 = function (req, res, next) {
  const name = req.query.name;
  const query = name ? { name } : { };
  Show
    .find(query)
    .execAsync()
    .then(shows => {
      if (!name) return res.json(shows);
      getShowsFromExternalAPI(name)
        .then(showsExternal => res.json(showsExternal))
        .catch(err => res.status(400).send(err));
    })
    .catch(err => res.status(400).send(err));
};

/* eslint-disable new-cap */

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
  add(newShow)
    .then(show => res.json(show))
    .catch(err => res.status(400).send(err));
};
