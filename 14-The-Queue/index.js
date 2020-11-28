// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

// Solution 1 - 0.482s
class Queue {
  constructor() {
    this.data = [];
  }

  add(newData) {
    this.data.unshift(newData);
  }

  remove() {
    return this.data.pop();
  }
}

module.exports = Queue;
