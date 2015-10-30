beforeEach(function () {
  this.textToBytes = function (text) {
    var result = [];
    for (var i = 0; i < text.length; i++) {
      result.push(text.charCodeAt(i));
    }
    return result;
  }
});