'use strict';

const express = require('express');

const router = express.Router();
const episodes = require('./episodes.controller');

/**
 * @api {get} /episodes/ Request Episodes
 * @apiVersion 0.0.1
 * @apiName GetEpisodes
 * @apiGroup Episode
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost/episodes/
 *
 * @apiSuccess (200) {Object[]} episodes Episodes stored in the app.
 * @apiSuccess (200) {String}   episodes._id   Object id.
 * @apiSuccess (200) {String}   episodes.title   Title.
 * @apiSuccess (200) {String}   episodes.description   Description.
 * @apiSuccess (200) {Number}   episodes.season   Season number.
 * @apiSuccess (200) {Number}   episodes.episode   Episode number.
 * @apiSuccess (200) {Number}   episodes.duration   Duration.
 * @apiSuccess (200) {Object}   episodes._show   Show related.
 * @apiSuccess (200) {String}   episodes._show._id   Object id.
 * @apiSuccess (200) {String}   episodes._show.name   Name of the show.
 */
router.get('/', episodes.getEpisodes);
/**
 * @api {post} /episodes/ Add Episode
 * @apiVersion 0.0.1
 * @apiName AddEpisode
 * @apiGroup Episode
 *
 * @apiSuccess (200) {Object} episode Episodes stored in the app.
 * @apiSuccess (200) {String}   episode._id   Object id.
 * @apiSuccess (200) {String}   episode.title   Title.
 * @apiSuccess (200) {String}   episode.description   Description.
 * @apiSuccess (200) {Number}   episode.season   Season number.
 * @apiSuccess (200) {Number}   episode.episode   Episode number.
 * @apiSuccess (200) {Number}   episode.duration   Duration.
 * @apiSuccess (200) {String}   episode._show   Object id.
 *
 * @apiError (400) InvalidEpisode Title is missing.
 * @apiError (400) InvalidEpisode Season is missing.
 * @apiError (400) InvalidEpisode Episode is missing.
 * @apiError (400) InvalidEpisode Show is missing.
 */
router.post('/', episodes.addEpisode);

module.exports = router;
