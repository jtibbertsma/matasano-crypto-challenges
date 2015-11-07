module.exports = metric;

// return a score determining how likely it is that data is an array
// containing english using character frequency analysis
function metric(data) {
  var score = 0;

  data.forEach(function (datum) {
    // Look for common english letters
    switch (datum) {
      // E
      case 69: case 101:
        score += 13;
        break;
      // T
      case 84: case 116:
        score += 12;
        break;
      // A
      case 65: case 97:
        score += 11;
        break;
      // O
      case 79: case 111:
        score += 10;
        break;
      // I
      case 73: case 105:
        score += 9;
        break;
      // N
      case 78: case 110:
        score += 8;
        break;
      // ' '
      case 32:
        score += 7;
        break;
      // S
      case 83: case 115:
        score += 6;
        break;
      // H
      case 72: case 104:
        score += 5;
        break;
      // R
      case 82: case 114:
        score += 4;
        break;
      // D
      case 68: case 100:
        score += 3;
        break;
      // L
      case 76: case 108:
        score += 2;
        break;
      // U
      case 85: case 117:
        score += 1;
        break;

      default:
        // Check for non-printable characters, which would suggest that this isn't
        // normal english text. This method will also detect non ascii characters,
        // so this isn't good for finding text not encoded in ascii.
        if (/[^ -~]/.test(String.fromCharCode(datum))) {
          score -= 15;
        }
    }
  });

  return score / data.length;
}