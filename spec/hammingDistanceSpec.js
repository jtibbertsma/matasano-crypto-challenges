describe("Hamming Distance", function () {
  var distance = require('../set1/exercise6/hammingDistance');

  it('correctly calculates hamming distance between two strings', function () {
    var data1 = this.textToBytes('this is a test'),
        data2 = this.textToBytes('wokka wokka!!!');

    expect(distance(data1, data2)).toEqual(37);
  });
});