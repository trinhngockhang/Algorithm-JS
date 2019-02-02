// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor(){
    this.arr = [];
  }
  add(n){
    this.arr.unshift(n);
  }
  remove(){
    return this.arr.pop();
  }
}

const q = new Queue();
q.add(1);
console.log(q.remove());
module.exports = Queue;
