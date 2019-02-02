// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
  var first = list.head;
  var sort = list.head;
  while(n>0){
    first = first.next;
    n--;
  }
  while(first.next){
    first = first.next;
    sort = sort.next;
  }
  return sort;
}

module.exports = fromLast;
