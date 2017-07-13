'use strict';

const express = require('express');

const router = express.Router();
const shows = require('./shows');

/**
 * @api {get} /shows/ Request Shows
 * @apiVersion 0.0.1
 * @apiName GetShows
 * @apiGroup Show
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost/shows/
 *
 * @apiSuccess (200) {Object[]} shows Shows stored in the app.
 * @apiSuccess (200) {String}   shows._id   Object id.
 * @apiSuccess (200) {String}   shows.name   Title.
 * @apiSuccess (200) {String}   shows.description   Description.
 */
router.get('/', shows.getShows);
/**
 * @api {post} /shows/ Add Show
 * @apiVersion 0.0.1
 * @apiName AddShow
 * @apiGroup Show
 *
 * @apiSuccess (200) {Object} show Show added.
 * @apiSuccess (200) {String}   show._id   Object id.
 * @apiSuccess (200) {String}   show.name   Title.
 * @apiSuccess (200) {String}   show.description   Description.
 *
 * @apiError (400) InvalidShow Name is missing.
 */
router.post('/', shows.addShow);

module.exports = router;
