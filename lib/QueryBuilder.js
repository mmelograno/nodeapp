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

const _getPopulatedFields = schema =>
  Object.keys(schema).filter(key => schema[key].onPopulate);

const _parsePopulatedField = (schema, populatedField, doc) =>
  schema[populatedField].onPopulate(doc)
    .then((populatedData) => {
      doc[populatedField] = populatedData;
      return Promise.resolve(doc);
    });

const search = (params, baseUrl) => {
  const schema = _getPath(baseUrl);
  const query = _buildFindObject(params);
  const Schema = mongoose.model(mapped[schema]);
  return Schema.find(query, defaultOptions).lean()
    .then((docs) => {
      const populatedFields = _getPopulatedFields(Schema.schema.obj);
      if (populatedFields && populatedFields.length) {
        const promises = docs
          .map(doc => _parsePopulatedField(Schema.schema.obj, populatedFields[0], doc));
        return Promise.all(promises).then(result => Promise.resolve(result));
      } else {
        return Promise.resolve(docs);
      }
    });
};

const searchById = (params, baseUrl) => {
  if (!params || !params.id) return Promise.reject('missing id');
  const schema = _getPath(baseUrl);
  const query = { id: params.id };
  const Schema = mongoose.model(mapped[schema]);
  return Schema.findOne(query, defaultOptions);
};

module.exports = {
  search,
  searchById,
};
