// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  
}

pyramid(5);
module.exports = pyramid;

// function pyramid(n) {
//   var a = n*2-1;
//   for(let i=1;i <=n;i++){
//     var str = '';
//     for(let j=1; j<=a; j++){
//       var dis = (i*2 - 2)/2;
//       if((j>= n - dis) && (j<= n+dis)) str += '#';
//       else str += ' ';
//     }
//     console.log(str);
//   }
// }
