describe('Fixed XOR', function () {
  var fixedXOR = require('../set1/exercise2');

  it('works properly', function () {
    var op1 = '1c0111001f010100061a024b53535009181c'
      , op2 = '686974207468652062756c6c277320657965'
      , res = '746865206b696420646f6e277420706c6179';

    expect(fixedXOR(op1, op2)).toEqual(res);
  });
});