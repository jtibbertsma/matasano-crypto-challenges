describe('Best Key Length Calculator', function () {
  var read = require('fs').readFileSync;
  var bestLength = require('../set1/exercise6/bestKeyLength');
  var encode = require('../set1/exercise5').encode;

  var data;

  beforeAll(function () {
    data = read('spec/hexToBase64Spec.js').toString();
  });

  describe('calculates the best key length', function () {

    // Hopefully we can get at least two of these to pass
    it('in this case', function () {
      var encrypted = encode(data, "BALLS");

      expect(bestLength(encrypted)).toEqual(5);
    });

    it('in this case as well', function () {
      var encrypted = encode(data, "MADSKILLS");

      expect(bestLength(encrypted)).toEqual(9);
    });

    it('also in this case', function () {
      var encrypted = encode(data, "TACO");

      expect(bestLength(encrypted)).toEqual(4);
    });
  });
});