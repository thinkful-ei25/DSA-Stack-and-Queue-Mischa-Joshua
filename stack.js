'use strict';

class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }
    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    if (this.top === null) {
      return;
    }
    const node = this.top;
    this.top = node.next;
    return node.data;
  }

  peek() {
    if (this.top === null) {
      return null;
    }
    return this.top.data;
  }

  display() {
    let node = this.top;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }

}

// push each char into stack
// pop each one out add to tempStr 
// if s === tempStr IT'S A PALINDROME!!!!

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

  const stack = new Stack();
  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);
  }
  let tempStr = '';

  while (stack.top) {
    tempStr += stack.pop();
  }
  return s === tempStr;
}

function parens(s) {
  let openBrack = 0;
  let closedBrack = 0;
  let position = 0;
  const stack = new Stack();
  for (let i = 0; i < s.length; i++) {
    stack.push({ value: s[i], position: i });
  }
  while (stack.top) {
    if (stack.peek().value === ')') {
      stack.pop();
      closedBrack++;
      position++;
    }
    else if (stack.peek().value === '(') {
      stack.pop();
      openBrack++;
      position++;
    } else {
      stack.pop();
      position++;
    }
    if (closedBrack < openBrack) {
      return ('error at ' + position);
    }
    
  }
  if (openBrack < closedBrack) {
    return ('error too many opens ');
  }
  return true;
}

//tempstack 
// while stack do something--> 
// tempnode --> store values for later!
//while(stack) --> set tempnode stack.top  / stack.pop()
//nested whileloop(while tempstack.top > tempnode.value) 

function sortStack(stack){
  let tempStack = new Stack();
  while(stack.top !== null){
    let tempNode = stack.pop();
    while(tempStack.top !== null && tempStack.peek() > tempNode){
      stack.push(tempStack.pop());
    }
    tempStack.push(tempNode);
  }
  return tempStack;
}

//2 stacks ==> 
/* 
 stack 1 
 stack 2
 enqueue
 --> stack1.push()

 dequeue
 --> if(!stack2){
        if(!stack1){
          return
        }
      }while(stack1.top){
        stack2.push(stack1.pop());
      }
      return stack2.pop()


*/

function main() {
  // console.log(parens('()()()()'));
  // console.log(parens('())'));
  // console.log(parens('(dwwd))'));
  // console.log(parens('((()))'));

  let toSort = new Stack();
  toSort.push(3);
  toSort.push(8);
  toSort.push(1);
  toSort.push(2);
  toSort.push(10);
  // sorted.display();
  toSort.stackDequeue();
  toSort.display();
}






class StackQueue{
  constructor(){
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }
  enque(data){
    this.stack1.push(data);
  }
  
  dequeue(){
    if(this.stack2.top === null){
      if(this.stack1.top  === null){
        return;
      }
      while(this.stack1.top){
        this.stack2.push(this.stack1.pop());
      }
    } return this.stack2.pop();
  }
}

function stackQueing(){
  const stackQueue = new StackQueue;
  stackQueue.enque(1);
  stackQueue.enque(2);
  stackQueue.enque(3);
  console.log(stackQueue);
  const popped = stackQueue.dequeue();
  console.log(popped);
  stackQueue.dequeue();
  console.log(stackQueue);
}
stackQueing();