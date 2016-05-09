const Show = require('../models/shows.models').Show;

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
    .populate('episodes')
    .exec((err, shows) => {
      if (err) return res.status(400).send(err);
      return res.json(shows);
    });
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
  newShow.save((err, show) => {
    if (err) return res.status(400).send(err);
    return res.json(show);
  });
};
