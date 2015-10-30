describe('Base64 decoder', function () {
  var decode = require('../set1/exercise6/base64decode').decodeBase64;

  function textToBytes(text) {
    var result = [];
    for (var i = 0; i < text.length; i++) {
      result.push(text.charCodeAt(i));
    }
    return result;
  }

  it('converts base64 to an array of bytes', function () {
    var decoded = textToBytes('pleasure.'),
        encoded = 'cGxlYXN1cmUu';

    expect(decode(encoded)).toEqual(decoded);
  });

  it('handles one byte missing case', function () {
    var decoded = textToBytes('leasure.'),
        encoded = 'bGVhc3VyZS4=';

    expect(decode(encoded)).toEqual(decoded);
  });

  it('handles two bytes missing case', function () {
    var decoded = textToBytes('easure.'),
        encoded = 'ZWFzdXJlLg==';

    expect(decode(encoded)).toEqual(decoded);
  });
});