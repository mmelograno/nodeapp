const crypto = require('crypto');

exports.generateRandomString = function (s) {
  return s ? crypto.createHash('md5').update(String(new Date().getTime())).digest('hex') + s
    : crypto.createHash('md5').update(String(new Date().getTime())).digest('hex');
};
