describe('Base64 decoder', function () {
  var decode = require('../shared/base64decode').decodeBase64;

  it('converts base64 to an array of bytes', function () {
    var decoded = this.textToBytes('pleasure.'),
        encoded = 'cGxlYXN1cmUu';

    expect(decode(encoded)).toEqual(decoded);
  });

  it('handles one byte missing case', function () {
    var decoded = this.textToBytes('leasure.'),
        encoded = 'bGVhc3VyZS4=';

    expect(decode(encoded)).toEqual(decoded);
  });

  it('handles two bytes missing case', function () {
    var decoded = this.textToBytes('easure.'),
        encoded = 'ZWFzdXJlLg==';

    expect(decode(encoded)).toEqual(decoded);
  });
});