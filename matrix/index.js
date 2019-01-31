// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  var lastArr = [];
  for(let i = 1; i<=n; i++){
    lastArr.push([]);
  }
  let count = 1;
  let startColumn = 0;
  let endColumn = n-1;
  let startRow = 0;
  let endRow= n-1;
  while(startColumn <= endColumn && startRow <= endRow){
    //top endRow
    for(let i = startColumn;i <= endColumn;i++){
      lastArr[startRow][i] = count;
      count++;
    }
    startRow++;
    //right column
    for(let i = startRow; i<= endRow;i++){
      lastArr[i][endColumn] = count;
      count++;
    }
    endColumn--;
    //bot endRow
    for(let i = endColumn;i >= startColumn;i--){
      lastArr[endRow][i] = count;
      count++;
    }
    endRow--;
    for(let i = endRow;i >= startRow;i--){
      lastArr[i][startColumn] = count;
      count++;
    }
    startColumn++;
  }

  return lastArr;
}

console.log(matrix(3));
module.exports = matrix;
