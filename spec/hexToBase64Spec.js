describe("Hex to Base 64", function () {
  var hexToBase64 = require('../set1/exercise1');

  it("works properly", function () {
    var hex = "49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d";
    var base64 = "SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t";

    expect(hexToBase64(hex)).toEqual(base64);
  });
});