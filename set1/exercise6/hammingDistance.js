module.exports = hammingDistance;

// arguments are byte arrays
function hammingDistance(data1, data2) {
  if (data1.length !== data2.length)
    throw "Error: strings should be the same length";

  var distance = 0;

  for (var i = 0; i < data1.length; ++i) {
    var a = data1[i], b = data2[i];

    distance += byteDistance(a, b);
  }

  return distance;
}

function byteDistance(a, b) {
  var distance = 0;
  for (var i = 0; i < 8; i++) {
    if ((a & (1 << i)) !== (b & (1 << i)))
      distance += 1;
  }
  return distance;
}