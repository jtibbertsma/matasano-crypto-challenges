#!/usr/bin/env node

var metric        = require('./set1/exercise6/metric')
  , decompose     = require('./set1/exercise6/decompose')
  , bestKeyLength = require('./set1/exercise6/bestKeyLength')
  , base64        = require('./shared/base64decode');

function bytesToText(bytes) {
  var text = '';
  bytes.forEach(function (byte) {
    text += String.fromCharCode(byte);
  });
  return text;
}

function main(data) {
  var keyLengths = bestKeyLength(data)
    , bestKey = '', bestString = '', bestScore = -10000000;

  for (var i = 0; i < keyLengths.length; ++i) {
    var decomposed = decompose(data, keyLengths[i])
      , decodedData = decomposed.decodedData()
      , score = metric(decodedData);

    if (score > bestScore) {
      bestScore = score;
      bestString = bytesToText(decodedData);
      bestKey = decomposed.bestKey();
    }
  }

  console.log("\nDecode Key: " + bestKey);
  console.log("==================================================================\n");
  console.log(bestString);
}

base64.decodeFile("./set1/exercise6/breakThis.txt", main);