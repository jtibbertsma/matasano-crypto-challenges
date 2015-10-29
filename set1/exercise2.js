module.exports = fixedXOR;

var HEX_CHARS = '0123456789abcdef';

function fixedXOR(str1, str2) {
  var length = Math.min(str1.length, str2.length);
      result = '';

  for (var i = 0; i < length; ++i) {
    var a = parseInt(str1[i], 16),
        b = parseInt(str2[i], 16);
    result += HEX_CHARS[a ^ b];
  }

  return result;
}