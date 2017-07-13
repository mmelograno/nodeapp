'use strict';

// eslint-disable-next-line import/no-extraneous-dependencies
const _ = require('lodash');
const defaults = require('./default.js');
// eslint-disable-next-line import/no-dynamic-require
const config = require(`./${(process.env.NODE_ENV || 'development')}.js`);
module.exports = _.merge({}, defaults, config);
