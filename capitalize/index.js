// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  var word = [];
  for(let char of str.split(' ')){
    word.push(char[0].toUpperCase() + char.slice(1));
  }
  return word.join(' ');
}

console.log(capitalize("hi there, how is it going?"));
module.exports = capitalize;


// function capitalize(str) {
//   str = str.replace(str[0],str[0].toUpperCase());
//   var i = 0;
//   while( i>=0 ){
//     i++;
//     i = str.indexOf(' ',i);
//     str = str.replaceAt(i+1,str[i+1].toUpperCase());
//   }
//   return str;
// }
