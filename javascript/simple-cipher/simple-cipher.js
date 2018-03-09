var alphabet = ["a","b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var Cipher = function(key) {

  var index = Math.floor(Math.random() * (26)); // + min;

  if (!key) {
    Cipher.prototype.key = '';

    for (var i = 0; i < 10; i++) {
      Cipher.prototype.key += alphabet[index];
    }
  } else {
    Cipher.prototype.key = key;
  }
};


Cipher.prototype.encode = function(string) {

  // var alphabet = ["a","b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var encodedWord = '';

  for (var i = 0; i < 10; i++) {

    var keyIndex = alphabet.indexOf(Cipher.prototype.key[i]);
    var LetterIndex = alphabet.indexOf(string[i]);

    var shift = keyIndex + LetterIndex;
    if (shift > 25) {
      var diff = shift - 26;
      shift = 0 + diff;
    }

    var newLetter = alphabet[shift];

    encodedWord += newLetter;
  }
  return encodedWord;
};

Cipher.prototype.decode = function(codedWord) {

  var decodedWord = '';

  for (var i = 0; i < 10; i++) {

    var LetterIndex = alphabet.indexOf(codedWord[i]);
    var keyIndex = alphabet.indexOf(Cipher.prototype.key[i]);


    var shift = keyIndex - LetterIndex;
    if (shift < 0) {
      var diff = 0 - shift;
      shift = 26 - diff;
    }

    var newLetter = alphabet[shift];

    decodedWord += newLetter;
  }

  return decodedWord;
};

module.exports = Cipher;
