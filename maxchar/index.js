// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  var max = 0;
  var maxChar;
  var data = {};
  for (let char of str){
    if(!data[char]) data[char] = 1;
    else data[char]++;
    if(data[char] > max){
      maxChar = char;
      max = data[char];
    }
  }
  return maxChar;
}

module.exports = maxChar;
