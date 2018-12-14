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

function main() {
  console.log(parens('()()()()'));
  console.log(parens('())'));
  console.log(parens('(dwwd))'));
  console.log(parens('((()))'));
}

main();