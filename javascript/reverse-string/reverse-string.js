//
// This is only a SKELETON file for the "reverse-string" exercise.
// This has NOT been provided by exercism.
//

var reverseString = function (string) {


  var array = string.split("");
  var reversedArray = array.reverse();
  var joined = reversedArray.join("");
  return joined;


// //
//   this.value = input;
// //
// };
//
// Year.prototype.isLeap = function () {
// //
//   if (this.value % 4 > 0) {
//       return false;
//   } else if (this.value % 100 == 0 && this.value % 400 > 0){
//       return false;
//   } else {
//       return true;
//   }
// //
};

module.exports = reverseString;
