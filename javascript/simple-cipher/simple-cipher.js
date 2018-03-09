var alphabet = ["a","b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var Cipher = function(key) {


  if (!key) {
    Cipher.prototype.key = '';

    var index = Math.floor(Math.random() * (26)); // + min;
    for (var i = 0; i < 10; i++) {
      Cipher.prototype.key += alphabet[index];
    }
  } else {
      /*
      for (var j = 0; j < key.length; j++) {
        regex_key = /[a-z]/;
        if (key[j].indexOf(regex_key) == -1) {
          throw Error('Bad key');
        }
      }*/
      Cipher.prototype.key = key;
  }
};


Cipher.prototype.encode = function(string) {

  // var alphabet = ["a","b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var encodedWord = '';

  for (var i = 0; i < string.length; i++) {

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

  for (var i = 0; i < codedWord.length; i++) {

    var LetterIndex = alphabet.indexOf(codedWord[i]);
    var keyIndex = alphabet.indexOf(Cipher.prototype.key[i]);


    var shift = LetterIndex - keyIndex;
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
