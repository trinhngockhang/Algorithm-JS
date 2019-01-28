// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array,size){
  var chunked = [];
  for(let num of array){
    const last = chunked[chunked.length - 1];
    if(!last || last.length === size){
      chunked.push([num]);
    }else{
      last.push(num);
    }
  }
  return chunked;
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));

module.exports = chunk;

// function chunk(array, size) {
//   var newArr = [];
//   array.forEach((num,index) => {
//     if((index+1) % size === 0){
//       var subArr = [];
//       for(let j=0;j< size;j++){
//         subArr.push(array[num-size + j ]);
//       }
//       newArr.push(subArr);
//     }else{
//       if(index+1 === array.length){
//         var subArr = [];
//         for(let a = ((index +1) % size);a>0;a--){
//           subArr.push(array[index-a+1]);
//         }
//         newArr.push(subArr);
//       }
//     }
//
//   })
//   return newArr;
// }
