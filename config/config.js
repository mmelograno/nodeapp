'use strict';

const _ = require('lodash');

/**
 * Load app configurations
 */
module.exports = _.extend(
	require('./env/all')
);
