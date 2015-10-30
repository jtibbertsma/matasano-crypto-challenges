module.exports = repeatXOREncode;

function repeatXOREncode(text, key) {
  var encoded = '';

  for (var i = 0; i < text.length; i++) {
    var v1 = text[i].charCodeAt(0),
        v2 = key[i % key.length].charCodeAt(0);

    var hex = Number(v1 ^ v2).toString(16);
    encoded += hex.length === 1 ? '0' + hex : hex;
  }

  return encoded;
}