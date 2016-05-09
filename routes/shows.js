'use strict';

const express = require('express');
const router = express.Router();
const shows = require('../controllers/shows.controller');

router.get('/', shows.getShows);
router.post('/', shows.addShow);

module.exports = router;
