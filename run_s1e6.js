#!/usr/bin/env node

var metric = require('set1/exercise6/metric');
var decompose = require('set1/exercise6/decompose');
var bestKeyLength = require('set1/exercise6/bestKeyLength');
var base64 = require('set1/exercise6/base64decode');

function main(data) {
  var keyLengths = bestKeyLength(data);
  for (var i = 0; i < keyLengths.length; ++i) {

  }
}

base64.decodeFile(main);