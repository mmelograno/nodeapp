'use strict';

const express = require('express');
const router = express.Router();
const episodes = require('../controllers/episodes.controller');

router.get('/', episodes.getEpisodes);
router.post('/', episodes.addEpisode);

module.exports = router;
