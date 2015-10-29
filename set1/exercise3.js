module.exports = decodeXORCipher;

function decodeXORCipher(hexString) {
  var valArray = hexDecode(hexString),
      simpleRejection = /[^a-z',.!? ]/i;

  for (var i = 0; i < 128; ++i) {
    var xor = doXOR(valArray, i)
        str = valuesToString(xor);

    if (!simpleRejection.test(str)) {
      return str;
    }
  }

  return null;
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