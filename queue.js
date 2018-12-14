'use strict';

class _Node{
  constructor(value){
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

  enqueue(data){
    const node = new _Node(data);
    if(this.first === null){
      this.first = node;
    }
    if(this.last){
      node.next = this.last;
      this.last.prev = node;
    }
    this.last = node;
  }

  dequeue(){
    if(this.first === null){
      return;
    }
    const node = this.first;
    this.first = node.prev;

    if(node === this.last){
      this.last = null;
    }
    return node.value;
  }

  peek(){
    if(this.first === null){
      return;
    }
    else return(this.first.value);
  }

  display(){
    let node = this.first;
    while(node){
      console.log(node.value);
      node = node.prev;
    }
  }


}
// <Front--------Back> Back == Previous, Front = Next
//(Kirk, Spock, Uhura, Sulu, Checkov)
//()
function main(){
  const starTrekQ = new Queue;
  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');
  // starTrekQ.display();
  // console.log(starTrekQ.peek());
  starTrekQ.dequeue();
  starTrekQ.dequeue()
  starTrekQ.display();
}

main();