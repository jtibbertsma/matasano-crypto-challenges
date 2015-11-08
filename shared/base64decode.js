var fs = require('fs');

module.exports = {
  decodeBase64: decodeBase64,
  decodeFile: decodeFile
}

var MAP = {
  A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6, H: 7, I: 8,
  J: 9, K: 10, L: 11, M: 12, N: 13, O: 14, P: 15, Q: 16,
  R: 17, S: 18, T: 19, U: 20, V: 21, W: 22, X: 23, Y: 24,
  Z: 25, a: 26, b: 27, c: 28, d: 29, e: 30, f: 31, g: 32,
  h: 33, i: 34, j: 35, k: 36, l: 37, m: 38, n: 39, o: 40,
  p: 41, q: 42, r: 43, s: 44, t: 45, u: 46, v: 47, w: 48,
  x: 49, y: 50, z: 51, '0': 52, '1': 53, '2': 54, '3': 55,
  '4': 56, '5': 57, '6': 58, '7': 59, '8': 60, '9': 61,
  '+': 62, '/': 63
};

// decodeBase64 takes a base 64 string and returns the data decoded as an
// array of bytes
function decodeBase64(string) {
  var chunk = /[A-Z0-9/+]{4}/gi, match, data = [];

  while (match = chunk.exec(string)) {
    var a = MAP[match[0][0]],
        b = MAP[match[0][1]],
        c = MAP[match[0][2]],
        d = MAP[match[0][3]];

    data.push(byteOne(a, b));
    data.push(byteTwo(b, c));
    data.push(byteThree(c, d));
  }

  return handleEnd(string, data);
}

// deal with sequences ending with '=' or '=='
function handleEnd(string, data) {
  var trailing = string.slice(string.length - 4, string.length);

  if (/[A-Z0-9/+]{3}=|[A-Z0-9/+]{2}==/i.test(trailing)) {
    var a = MAP[trailing[0]],
        b = MAP[trailing[1]],
        c = MAP[trailing[2]];
    data.push(byteOne(a, b));

    // two byte case
    if (trailing[2] !== '=') {
      data.push(byteTwo(b, c));
    }
  }

  return data;
}

function byteOne(a, b) {
  return ((a << 2) & 0xfc) | ((b >> 4) & 0x03);
}

function byteTwo(a, b) {
  return ((a << 4) & 0xf0) | ((b >> 2) & 0x0f);
}

function byteThree(a, b) {
  return ((a << 6) & 0xc0) | (b & 0x3f);
}

function decodeFile(filename, callback) {
  fs.readFile(filename, function (err, data) {
    if (err) throw err;

    data = data.toString().replace(/\s+/g, '');
    callback(decodeBase64(data));
  });
}