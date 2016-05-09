const express = require('express');
const router = express.Router();
const shows = require('../controllers/shows.controller');

/* GET users listing. */
router.get('/', shows.getShowsV2);
router.post('/', shows.addShow);

module.exports = router;
