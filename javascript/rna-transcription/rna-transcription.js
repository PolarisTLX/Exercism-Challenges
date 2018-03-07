var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(string) {
  if (string.length > 1) {
    var array = string.split("");
  } else {
    var array = [string];
  }
  var newArray = [];
  for (letter in array) {
    switch (array[letter]) {
      case 'G':
        newArray.push('C');
        break;
      case 'C':
        newArray.push('G');
        break;
      case 'T':
        newArray.push('A');
        break;
      case 'A':
        newArray.push('U');
        break;
      default:
        throw Error('Invalid input');
    }
  }
  return newArray.join("");
};

module.exports = DnaTranscriber;

/*
* `G` -> `C`
* `C` -> `G`
* `T` -> `A`
* `A` -> `U
*/
