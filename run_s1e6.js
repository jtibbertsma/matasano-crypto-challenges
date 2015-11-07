#!/usr/bin/env node

var metric = require('set1/exercise6/metric');
var decompose = require('set1/exercise6/decompose');
var bestKeyLength = require('set1/exercise6/bestKeyLength');
var base64 = require('set1/exercise6/base64decode');

function main(data) {
  var keyLengths = bestKeyLength(data),
      bestKey = '', bestString = '', bestScore = -10000000;

  for (var i = 0; i < keyLengths.length; ++i) {
    var decomposed = decompose(data, keyLengths[i]),
        decodedString = decomposed.decodedString(),
        score = metric(decodedString);

    if (score > bestScore) {
      bestScore = score;
      bestString = decodedString;
      bestKey = decomposed.bestKey();
    }
  }

  console.log("Decode Key: " + bestKey);
  console.log("==================================================================\n");
  console.log(decodedString);
}

base64.decodeFile("./set1/exercise6/breakThis.txt", main);