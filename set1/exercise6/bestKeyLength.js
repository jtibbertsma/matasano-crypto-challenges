// Find the likeliest key length of data encrypted with repeating key
// XOR encryption

var distance = require('./hammingDistance');

module.exports = bestKeyLength;

function bestKeyLength(data) {
  var minNormalized = data.length * 8, bestLength = 0;

  for (var i = 2; i < 44 && i * 4 < data.length; i++) {
    var slices = [], distances = [], current;

    for (var j = 0; j < 4; ++j) {
      slices.push(data.slice(i*j, i*(j+1)));
    }

    for (var n = 0; n < slices.length-1; n++) {
      for (var m = n+1; m < slices.length; m++) {
        distances.push(distance(slices[n], slices[m]));
      }
    }
    current = arrayAverage(distances) / i;

    if (current < minNormalized) {
      minNormalized = current;
      bestLength = i;
    }
  }

  return bestLength;
}

function arrayAverage(array) {
  return array.reduce(function (memo, value) {
    return memo + value;
  }, 0) / array.length;
}