module.exports = hexToBase64;

var BASE64_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

function hexToBase64(hexString) {
  var hexChunkRegex = /([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/gi,
      base64 = '',
      match;

  // Iterate through hex chunks
  while (match = hexChunkRegex.exec(hexString)) {
    var a = parseInt(match[1], 16),
        b = parseInt(match[2], 16),
        c = parseInt(match[3], 16),
        v1, v2, v3, v4;

    v1 = (a >> 2) & 0x3f;
    v2 = ((a << 4) & 0x30) | ((b >> 4) & 0x0f);
    v3 = ((b << 2) & 0x3c) | ((c >> 6) & 0x03);
    v4 = c & 0x3f;

    base64 += BASE64_CHARS[v1] + BASE64_CHARS[v2] + BASE64_CHARS[v3] + BASE64_CHARS[v4];
  }

  return base64;
}