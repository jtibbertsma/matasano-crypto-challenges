module.exports = hexToBase64;

var BASE64_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

function hexToBase64(hexString) {
  var triplets = getTriplets(hexString);
  var base64 = '';

  triplets.forEach(function (triplet) {
    var a = triplet[0], b = triplet[1], c = triplet[2],
        v1, v2, v3, v4;

    v1 = (a >> 2) & 0x3f;
    v2 = ((a << 4) & 0x30) | ((b >> 4) & 0x0f);
    v3 = ((b << 2) & 0x3c) | ((c >> 6) & 0x03);
    v4 = c & 0x3f;

    base64 += BASE64_CHARS[v1] + BASE64_CHARS[v2] + BASE64_CHARS[v3] + BASE64_CHARS[v4];
  });

  return base64;
}

// Given a hex string, get an array of triplets. Each triplet is an array that
// contains three values; each value is a group of two hex digits converted
// into an integer. Six hex digits are converted into four base64 digits, any
// digits past a multiple of six are ignored.
function getTriplets(hexString) {
  var hexChunkRegex = /[a-f0-9]{2}/gi,
      triplets = [],
      currentTriplet = [],
      match;

  // Iterate through hex chunks
  while (match = hexChunkRegex.exec(hexString)) {
    currentTriplet.push(parseInt(match[0], 16));

    if (currentTriplet.length === 3) {
      triplets.push(currentTriplet);
      currentTriplet = [];
    }
  }

  return triplets;
}