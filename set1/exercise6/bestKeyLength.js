// Find the likeliest key lengths of data encrypted with repeating key
// XOR encryption

var distance = require('./hammingDistance');

module.exports = bestKeyLength;

// return the top 4 key lengths
function bestKeyLength(data) {
  var distanceData = [];

  for (var i = 2; i < 44 && i * 2 < data.length; i++) {
    var distances = [], current;

    for (var j = 0; j < data.length-i*2; j += i*2) {
      var slice1 = data.slice(j, j + i),
          slice2 = data.slice(j + i, j + i*2);
      distances.push(distance(slice1, slice2));
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