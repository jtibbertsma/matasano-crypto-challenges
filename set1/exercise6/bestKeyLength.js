// Find the likeliest key lengths of data encrypted with repeating key
// XOR encryption

var distance = require('./hammingDistance');

module.exports = bestKeyLength;

// return the top 4 key lengths
function bestKeyLength(data) {
  var distanceData = [];

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
    distanceData.push([current, i]);
  }
  
  return distanceData.sort(compare).map(function (item) {
    return item[1];
  }).slice(0,4);
}

function compare(a, b) {
  if      (a[0] < b[0]) return -1;
  else if (a[0] > b[0]) return  1;
  else                  return  0;
}

function arrayAverage(array) {
  return array.reduce(function (memo, value) {
    return memo + value;
  }, 0) / array.length;
}