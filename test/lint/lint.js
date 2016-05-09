const lint = require('mocha-eslint');
const paths = [
  './controllers',
  './_lib',
  './test',
];
const options = {};

options.alwaysWarn = false;

lint(paths, options);
