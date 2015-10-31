module.exports = {
  encodeToHex: repeatXOREncodeHex,
  encode: repeatXOREncode
};

function repeatXOREncode(text, key) {
  var result = [];

  for (var i = 0; i < text.length; i++) {
    var v1 = text[i].charCodeAt(0),
        v2 = key[i % key.length].charCodeAt(0);

    result.push(v1 ^ v2);
  }

  return result;
}

function repeatXOREncodeHex(text, key) {
  var data = repeatXOREncode(text, key), hex = '';

  for (var i = 0; i < data.length; ++i) {
    var chunk = Number(data[i]).toString(16);
    hex += chunk.length === 1 ? '0' + chunk : chunk;
  }

  return hex;
}