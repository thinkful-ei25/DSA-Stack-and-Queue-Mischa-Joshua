class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class StackQueue{
  constructor(){
    this.top = null;
  }
  enque(data){
    this.push(data);
  }
  pop() {
    if (this.top === null) {
      return;
    }
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
  dequeue(){
    const stack2 = new StackQueue();
    if(!this.stack2){
      if(!this.top){
        return;
      }
      while(this.top){
        stack2.push(this.pop());
      }
    } return stack2.pop();
  }
}
