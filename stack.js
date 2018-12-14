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
  toSort.display();
  const sorted = sortStack(toSort);
  sorted.display();
  toSort.display();
}

main();