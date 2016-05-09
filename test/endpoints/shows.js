const request = require('supertest');
const app = require('../../app.js');
const utils = require('../utils/utils');

/* eslint-disable no-unused-vars */
const assertions = require('../assertions/assertions');
/* eslint-disable no-unused-vars */

const showTest = {
  name: utils.generateRandomString(),
};

describe('POST /shows', () => {
  it('should fail when name is missing', (done) => {
    request(app)
      .post('/shows')
      .set('Accept', 'application/json')
      .send()
      .expect(400)
      .end((err) => {
        if (err) {
          throw err;
        }
        done();
      });
  });

  it('should add new show when correct data is sent', (done) => {
    request(app)
      .post('/shows')
      .set('Accept', 'application/json')
      .send(showTest)
      .expect(200)
      .end((err, res) => {
        if (err) {
          throw err;
        }
        res.body.should.be.validShow();
        done();
      });
  });
});

describe('GET /shows', () => {
  it('should get shows', (done) => {
    request(app)
      .get('/shows')
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, res) => {
        if (err) {
          throw err;
        }
        res.body.should.be.instanceOf(Array);
        res.body.length.should.be.aboveOrEqual(1);
        res.body.forEach(show => {
          show.should.be.validShow();
        });
        done();
      });
  });
});
