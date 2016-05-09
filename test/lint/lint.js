'use strict';

const lint = require('mocha-eslint');
const paths = [
  './controllers',
  './_lib',
  './test',
];
const options = {};

lint(paths, options);
