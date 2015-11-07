describe('Best Key Length Calculator', function () {
  var read = require('fs').readFileSync;
  var bestLengths = require('../set1/exercise6/bestKeyLength');
  var encode = require('../set1/exercise5').encode;

  var data;

  beforeAll(function () {
    data = read('spec/helpers/text.txt').toString();
  });

  describe('calculates the best key length', function () {

    it('in this case', function () {
      var encrypted = encode(data, "MExico");

      expect(bestLengths(encrypted)).toContain(6);
    });

    it('in this case as well', function () {
      var encrypted = encode(data, "MADSKILLS");

      expect(bestLengths(encrypted)).toContain(9);
    });

    it('also in this case', function () {
      var encrypted = encode(data, "TACO");

      expect(bestLengths(encrypted)).toContain(4);
    });

    it('finally, in this case', function () {
      var encrypted = encode(data, "A handful of tangerines");

      expect(bestLengths(encrypted)).toContain(23);
    });
  });
});