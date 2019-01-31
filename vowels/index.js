// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  var xxx = str.match(/[aeiuo]/gi);
  return xxx? xxx.length : 0
}

module.exports = vowels;

// function vowels(str) {
//   var count = 0;
//   var arr = ['a','e','i','u','o'];
//   for(let char of str){
//     arr.includes(char.toLowerCase())? count++ : count = count;
//   }
//   return count;
// }
