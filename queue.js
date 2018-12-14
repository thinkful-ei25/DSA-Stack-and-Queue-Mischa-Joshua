'use strict';

class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);
    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      node.next = this.last;
      this.last.prev = node;
    }
    this.last = node;
  }

  dequeue() {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = node.prev;

    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }

  peek() {
    if (this.first === null) {
      return;
    }
    else return (this.first.value);
  }

  display() {
    let node = this.first;
    while (node) {
      console.log(node.value);
      node = node.prev;
    }
  }


}
// <Front--------Back> Back == Previous, Front = Next
//(Kirk, Spock, Uhura, Sulu, Checkov)
//()

function pairOff(queue) {
  const manSpareQueue = new Queue;
  const womanSpareQueue = new Queue;
  let manCount = 0;
  let womanCount = 0;
  if (queue.first === null) {
    return;
  }
  while (queue.first !== null) {
    let person = queue.dequeue();
    if (person.sex === 'M') {
      manSpareQueue.enqueue(person);
      manCount++;
    }
    else {
      womanSpareQueue.enqueue(person);
      womanCount++;
    }
  }
  if (manCount > womanCount) {
    while (womanCount > 0) {
      console.log('Female dancer is: ' + womanSpareQueue.dequeue().name
        + ' and the male dancer is: ' + manSpareQueue.dequeue().name);
      manCount--;
      womanCount --;
    }
    console.log('There are ' + manCount + ' male dancers waiting to dance');
  }
  else if (womanCount > manCount) {
    while (manCount > 0) {
      console.log('Female dancer is: ' + womanSpareQueue.dequeue().name
        + ' and the male dancer is: ' + manSpareQueue.dequeue().name);
      womanCount--;
      manCount--;
    }
    console.log('There are ' + womanCount + ' female dancers waiting to dance');
  }
  else {
    while (manSpareQueue.first !== null) {
      console.log('Female dancer is: ' + womanSpareQueue.dequeue().name
        + ' and the male dancer is: ' + manSpareQueue.dequeue().name);
    }
  }
}



function main() {
  const starTrekQ = new Queue;
  // starTrekQ.enqueue('Kirk');
  // starTrekQ.enqueue('Spock');
  // starTrekQ.enqueue('Uhura');
  // starTrekQ.enqueue('Sulu');
  // starTrekQ.enqueue('Checkov');
  // starTrekQ.display();
  // console.log(starTrekQ.peek());
  // starTrekQ.dequeue();
  // starTrekQ.dequeue()
  // starTrekQ.display();
  const dancingQueue = new Queue;
  dancingQueue.enqueue({ sex: 'F', name: 'Jane' });
  dancingQueue.enqueue({ sex: 'M', name: 'Frank' });
  dancingQueue.enqueue({ sex: 'M', name: 'John' });
  // dancingQueue.enqueue({ sex: 'M', name: 'Sherlock' });
  // dancingQueue.enqueue({ sex: 'F', name: 'Madonna' });
  // dancingQueue.enqueue({ sex: 'M', name: 'David' });
  // dancingQueue.enqueue({ sex: 'M', name: 'Christopher' });
  dancingQueue.enqueue({ sex: 'F', name: 'Beyonce' });
  pairOff(dancingQueue);
}

main();