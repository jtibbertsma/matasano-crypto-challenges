module.exports = searchForEnglish;

var fs = require('fs');
var ex3 = require('./exercise3');

var decode = ex3.decode, metric = ex3.metric

function searchForEnglish(callback) {
  fs.readFile('set1/ex4data.txt', function (err, data) {
    if (err) callback(err, null);

    data = data.toString();
    var line = /^[a-f0-9]+$/gim,
        match, result = null,
        maxMatch = 0, val, current;

    while (match = line.exec(data)) {
      current = decode(match[0]);
      val = metric(current);

      if (val > maxMatch) {
        result = current;
        maxMatch = val;
      }
    }

    callback(null, result);
  });
}