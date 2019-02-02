// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data,nextNode = null){
    this.data = data;
    this.next = nextNode;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }
  insertFirst(data){
    var node = new Node(data,this.head);
    this.head = node;
  }
  size(){
    var sum = 0;
    var node = this.head;
    while(node){
      sum++;
      node = node.next;
    }
    return sum;
  }
  getFirst(){
    return this.head;
  }
  getLast(){
    if(!this.head) return null;
    var node = this.head;
    while(node.next){
      node = node.next;
    }
    return node;
  }
  clear(){
    this.head = null;
  }
  removeFirst(){
    this.head = this.head.next;
  }
  removeLast(){
    var node = this.head;
    if(!this.head) return;
    if(!this.head.next){
      this.head = null;
      return;
    }
    while(node.next.next){
      node = node.next;
    }
    node.next = null;
  }
  insertLast(data){
    const last = this.getLast();
    if(last){
      last.next = new Node(data);
    }else{
      this.head = new Node(data);
    }
  }
  getAt(n){
    if(!this.head) return null;
    let count = 0;
    let node = this.head;
    while(node){
      if(count == n) return node;
      node = node.next;
      count++;
    }
    return node;
  }
  removeAt(n){
    if(!this.head) return null;
    if(n > this.size() || this.size() == 1) return null;
    if( n == 0) {
      this.head = this.head.next;
    }
    var count = 0;
    var head = this.head;
    var node = this.getAt(n);
    while (! count == n -1 && head) {
      count++;
      head = head.next;
    }
    head.next = node.next;
  }
  insertAt(data,n){
    if(!this.head){
      this.head = new Node(data);
      return;
    }
    if(n === 0 ){
      this.head = new Node(data,this.head);
      return;
    }

    const previous = this.getAt(n-1)|| this.getLast();
    var node = new Node(data,previous.next);
    previous.next = node;
  }
  forEach(callback){
    var node = this.head;
    while(node){
      callback(node);
      node = node.next;
    }
  }
  *[Symbol.iterator](){
    let node = this.head;
    while(node){
      yield node;
      node = node.next;
    }
  }


}



module.exports = { Node, LinkedList };
