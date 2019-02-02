// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor(){
    this.stack = new Stack();
    this.ans = new Stack();
  }

  add(n){
    this.stack.push(n);
  }

  peek(){
    while(this.stack.peek()){
      this.ans.push(this.stack.pop());
    }
    const res = this.ans.peek();
    while(this.ans.peek()){
      this.stack.push(this.ans.pop());
    }
    return res;
  }
  remove(){
    while(this.stack.peek()){
      this.ans.push(this.stack.pop());
    }
    const res = this.ans.pop();
    while(this.ans.peek()){
      this.stack.push(this.ans.pop());
    }
    return res;
  }
}

module.exports = Queue;
