describe('repeating-key XOR Encoder', function () {
  var encode = require('../set1/exercise5');

  it('encodes the first example', function () {
    var decoded = "Burning 'em, if you ain't quick and nimble",
        encoded = "0b3637272a2b2e63622c2e69692a23693a2a3c6324202d623d63343c2a26226324272765272";

    expect(encode(decoded, "ICE")).toEqual(encoded);
  });

  it('encodes the second example', function () {
    var decoded = "I go crazy when I hear a cymbal",
        encoded = "a282b2f20430a652e2c652a3124333a653e2b2027630c692b20283165286326302e27282f";

    expect(encode(decoded, "ICE")).toEqual(encoded);
  });
});