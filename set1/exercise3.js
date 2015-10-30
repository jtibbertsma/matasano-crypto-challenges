module.exports = {
  decode: decodeXORCipher,
  metric: englishLanguageMetric
};

function decodeXORCipher(hexString) {
  var valArray = hexDecode(hexString),
      maxMatch = 0,
      result = null;

  for (var i = 0; i < 128; ++i) {
    var xor = doXOR(valArray, i)
        str = valuesToString(xor),
        val = englishLanguageMetric(str);

    if (val > maxMatch) {
      maxMatch = val;
      result = str;
    }
  }

  return result;
}

function englishLanguageMetric(str) {
  var common = /[ETAOIN SHRDLU]/ig,
      count = 0;

  while (common.test(str)) count++;

  return count / str.length;
}

function hexDecode(string) {
  var result = [],
      chunk = /[a-f0-9]{2}/gi,
      match;

  while (match = chunk.exec(string)) {
    result.push(parseInt(match[0], 16));
  }

  return result;
}

function doXOR(values, x) {
  return values.map(function (v) {
    return v ^ x;
  });
}

function valuesToString(values) {
  var string = '';
  values.forEach(function (v) {
    string += String.fromCharCode(v);
  });
  return string;
}