// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  var arr = [root,'e'];
  var counter = [0];
  while(arr.length > 1){
    var node = arr.shift();
    if(node === 'e'){
      counter.push(0);
      arr.push('e');
    }else{
      counter[counter.length - 1]++;
      arr.push(...node.children);
    }
  }
  return counter;
}

module.exports = levelWidth;
