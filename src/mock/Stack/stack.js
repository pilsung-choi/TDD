class Stack {
  constructor() {
    this.head = null;
    this._size = 0;
  }

  size() {
    return this._size;
  }

  push(item) {
    const node = { item, next: this.head };
    this.head = node;
    this._size++;
  }

  pop() {
    if (this._size === 0) {
      throw new Error('Stack is empty');
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.item;
  }

  peek() {
    if (this.head === null) {
      throw new Error('Stack is empty');
    }
    // return this.array[this.size() - 1];
    return this.head.item;
  }
}

module.exports = Stack;
