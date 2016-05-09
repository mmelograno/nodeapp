'use strict';

const crypto = require('crypto');

exports.generateRandomString = function () {
  return crypto.createHash('md5').update(String(new Date().getTime())).digest('hex');
};
