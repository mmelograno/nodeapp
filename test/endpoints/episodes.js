'use strict';

const request = require('supertest');
const app = require('../../app.js');
const utils = require('../utils/utils');

/* eslint-disable no-unused-vars */
const assertions = require('../assertions/assertions');
/* eslint-disable no-unused-vars */

const showTest = {
  name: utils.generateRandomString(),
};
const titleEpisode = `${utils.generateRandomString()}4`;

let showTestId;

describe('POST /episodes', () => {
  before(done => {
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
        showTestId = res.body._id;
        done();
      });
  });

  it('should fail when title is missing', (done) => {
    const episodeTest = {
      duration: 50,
      season: 1,
      episode: 1,
      description: '',
      show: showTestId,
    };
    request(app)
      .post('/episodes')
      .set('Accept', 'application/json')
      .send(episodeTest)
      .expect(400)
      .end((err) => {
        if (err) {
          throw err;
        }
        done();
      });
  });

  it('should fail when season is missing', (done) => {
    const episodeTest = {
      title: titleEpisode,
      duration: 50,
      episode: 1,
      description: '',
      show: showTestId,
    };
    request(app)
      .post('/episodes')
      .set('Accept', 'application/json')
      .send(episodeTest)
      .expect(400)
      .end((err) => {
        if (err) {
          throw err;
        }
        done();
      });
  });

  it('should fail when episode is missing', (done) => {
    const episodeTest = {
      title: titleEpisode,
      duration: 50,
      season: 1,
      description: '',
      show: showTestId,
    };
    request(app)
      .post('/episodes')
      .set('Accept', 'application/json')
      .send(episodeTest)
      .expect(400)
      .end((err) => {
        if (err) {
          throw err;
        }
        done();
      });
  });

  it('should fail when show is missing', (done) => {
    const episodeTest = {
      title: titleEpisode,
      duration: 50,
      season: 1,
      episode: 1,
      description: '',
    };
    request(app)
      .post('/episodes')
      .set('Accept', 'application/json')
      .send(episodeTest)
      .expect(400)
      .end((err) => {
        if (err) {
          throw err;
        }
        done();
      });
  });

  it('should pass when send correct data', (done) => {
    const episodeTest = {
      title: titleEpisode,
      duration: 50,
      season: 1,
      episode: 1,
      description: '',
      show: showTestId,
    };
    request(app)
      .post('/episodes')
      .set('Accept', 'application/json')
      .send(episodeTest)
      .expect(200)
      .end((err, res) => {
        if (err) {
          throw err;
        }
        res.body.should.be.validEpisode();
        done();
      });
  });
});

describe('GET /episodes', () => {
  it('should get episodes', (done) => {
    request(app)
      .get('/episodes')
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, res) => {
        if (err) {
          throw err;
        }
        res.body.should.be.instanceOf(Array);
        res.body.length.should.be.aboveOrEqual(1);
        res.body.forEach(episode => {
          episode.should.be.validEpisode();
          episode._show.should.be.validShow();
        });
        done();
      });
  });
});
