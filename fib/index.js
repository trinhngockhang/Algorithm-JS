// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  if(n === 0) return 0;
  if(n === 1) return 1;
  var a = 0;
  var b = 1;
  for(let i = 2;i<= n;i++){
    b = a + b;
    a = b - a;
  }
  return b;
}

module.exports = fib;

// O(n)
// function fib(n) {
//   if(n === 0) return 0;
//   if(n === 1) return 1;
//   return fib(n-1) + fib(n-2);
// }
