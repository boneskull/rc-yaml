'use strict';

var rc = require('../lib/rc-yaml');
var fixture = require('./fixture.json');
var path = require('path');
var assert = require('assert');
var ini = require('ini');

describe('rc-yaml', function() {
  it('should parse a JSON file', function() {
    var result = rc('test',
      {},
      {
        config: path.join(__dirname, 'fixture.json')
      });

    delete result.config;
    delete result.configs;

    assert.deepEqual(result, fixture);
  });

  it('should parse a YAML file', function() {
    var result = rc('test',
      {},
      {
        config: path.join(__dirname, 'fixture.yaml')
      });

    delete result.config;
    delete result.configs;

    assert.deepEqual(result, fixture);
  });

  it('should parse an INI file', function() {
    var result = rc('test',
      {},
      {
        config: path.join(__dirname, 'fixture.ini')
      });

    delete result.config;
    delete result.configs;

    assert.deepEqual(result, ini.parse(ini.stringify(fixture)));
  });

});
