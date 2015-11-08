var metric = require('./metric');

module.exports = decompose;

// given a key length n and an array of data, create a Decomposed object
function decompose(data, keyLength) {
  var dataArray = [], i, j;
  for (i = 0; i < keyLength; ++i) dataArray.push([]);

  for (i = 0, j = 0; i < data.length; ++i, ++j) {
    if (j === keyLength)
      j = 0;
    dataArray[j].push(data[i]);
  }

  return new Decomposed(dataArray);
}

function Decomposed(dataArray) {
  this.dataArray = dataArray;
  this.key = '';
  this.keyLength = dataArray.length;
}

Decomposed.prototype = {
  // get the value of the key used to decode the data
  bestKey: function () {
    if (this.key.length === 0) {
      this.doDecode();
    }
    return this.key;
  },

  // get the decoded string
  decodedData: function () {
    if (this.key.length === 0) {
      this.doDecode();
    }
    return this.recompose();
  },

  // calculate the decoded string from the decoded data array
  recompose: function () {
    var recomposed = [];
    for (var i = 0; i < this.decoded[0].length; ++i) {
      for (var j = 0; j < this.decoded.length; ++j) {
        if (i === this.decoded[j].length)
          break;
        recomposed.push(this.decoded[j][i]);
      }
    }
    return recomposed;
  },

  // calculate the key and decode the data
  doDecode: function () {
    this.decoded = this.dataArray.map(function (array) {
      var letter, bestScore = -10000000, bestArray;
      for (var i = 0; i < 128; ++i) {
        var attemptedDecode = array.map(function (datum) {
          return i ^ datum;
        });
        var score = metric(attemptedDecode);

        if (score > bestScore) {
          bestScore = score;
          bestArray = attemptedDecode;
          letter = i;
        }
      }
      this.key += String.fromCharCode(letter);
      return bestArray;
    }.bind(this));
  }
};