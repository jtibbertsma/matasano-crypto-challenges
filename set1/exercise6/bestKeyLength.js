// Find the likeliest key length of data encrypted with repeating key
// XOR encryption

var distance = require('./hammingDistance');

module.exports = bestKeyLength;

function bestKeyLength(data) {
  var minNormalized = data.length * 8, current, bestLength = 0;

  for (var i = 2; i < 44 && i * 2 < data.length; i++) {
    var slice1 = data.slice(0,i),
        slice2 = data.slice(i,i*2);

    if ((current = distance(slice1, slice2) / i) < minNormalized) {
      minNormalized = current;
      bestLength = i;
    }
  }

  return bestLength;
}