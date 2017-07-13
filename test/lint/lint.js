'use strict';

const lint = require('mocha-eslint');

const paths = [
  './app',
];
const options = {};

lint(paths, options);
