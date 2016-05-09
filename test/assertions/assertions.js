'use strict';

const should = require('should');

should.Assertion.add(
  'validShow',
  function () {
    const obj = this.obj;

    this.params = {
      operator: 'To be valid show',
    };

    should.exist(obj);
    obj.should.have.property('name').be.type('string');
    obj.should.have.property('_id').be.type('string');
  },
  true
);

should.Assertion.add(
  'validEpisode',
  function () {
    const obj = this.obj;

    this.params = {
      operator: 'To be valid episode',
    };

    should.exist(obj);
    obj.should.have.property('title').be.type('string');
    obj.should.have.property('season').be.type('number');
    obj.should.have.property('episode').be.type('number');
    obj.should.have.property('_show');
  },
  true
);
