'use strict';

/* eslint no-underscore-dangle: 0 */

const mongoose = require('mongoose');

const mapped = {
  shows: 'Show',
  episodes: 'Episode',
};

const defaultOptions = {
  __v: 0,
};

const _getPath = baseUrl => baseUrl.split('/').pop();

const _buildFindObject = (params) => {
  const query = {};
  Object.keys(params).forEach((property) => {
    query[property] = params[property];
  });
  return query;
};

const search = (params, baseUrl) => {
  const schema = _getPath(baseUrl);
  const query = _buildFindObject(params);
  const Schema = mongoose.model(mapped[schema]);
  return Schema.find(query, defaultOptions);
};

module.exports = {
  search,
};
