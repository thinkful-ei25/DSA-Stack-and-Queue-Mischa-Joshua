'use strict';

class _Node {
  constructor(data, next){
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor(){
    this.top = null;
  }

  push(data){
    if(this.top === null){
      this.top = new _Node(data, null);
      return this.top;
    }
    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop(){
    if(this.top === null){
      return;
    }
    const node = this.top;
    this.top = node.next;
    return node.data;
  }

  peek(){
    if(this.top === nill){
      return null;
    }
    return this.top.data;
  }

  display(){
    let node = this.top
    while(node){
      console.log(node.data);
      node = node.next;
    }
  }

}



function main(){
  let stack = new Stack();
  stack.push('Kirk');
  stack.push('Spock');
  stack.push('McCoy');
  stack.push('Scotty');
  // stack.display();
  stack.pop();
  stack.pop();
  stack.push('Scotty');
  stack.display();
}

main();