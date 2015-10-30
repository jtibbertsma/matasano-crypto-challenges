// Spoilers!

describe('Single-byte XOR cipher decoder', function () {
  var decode = require('../set1/exercise3').decode;

  it('works properly', function () {
    var encoded = '1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736',
        decoded = 'Cooking MC\'s like a pound of bacon';

    expect(decode(encoded)).toEqual(decoded);
  });
});