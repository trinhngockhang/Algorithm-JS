// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA,stringB){
  var a = stringA.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
  var b = stringB.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
  return a == b;
}

console.log( anagrams('y', 'y'));
module.exports = anagrams;
// function anagrams(stringA, stringB) {
//   var objA = buidCharMap(stringA);
//   var objB = buidCharMap(stringB);
//   if(Object.keys(objA).length !== Object.keys(objB).length){
//     return false;
//   }else{
//     for(let i in objA){
//       if(objA[i] !== objB[i]) return false;
//     }
//   }
//   return true;
// }
//
// function buidCharMap(string){
//   var obj = {};
//   for(let char of string.replace(/[^\w]/g,'').toLowerCase()){
//     obj[char] = obj[char] + 1 || 1;
//   }
//   return obj;
// }
