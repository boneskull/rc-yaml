'use strict';

var yaml = require('yaml-js');
var rc = require('rc');
var ini = require('ini');
var stripJsonComments = require('strip-json-comments');

function parser(content, file) {
  var retval;

  if ((file && /\.json$/i.test(file)) || /^\s*{/.test(content)) {
    return JSON.parse(stripJsonComments(content));
  }

  retval = yaml.load(content);

  if (typeof retval !== 'string') {
    return retval;
  }

  return ini.parse(content);
}

function rcYaml(name, defaults, argv, parse) {
  parse = parse || parser;
  return rc(name, defaults, argv, parse);
}

rcYaml.parser = parser;

module.exports = rcYaml;
