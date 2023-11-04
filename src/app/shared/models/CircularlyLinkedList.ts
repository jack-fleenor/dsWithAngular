import { SinglePointedNode } from "./SinglePointedNode";
import { LinkedList, LinkedListValueType } from "./LinkedList";

export class CircularlyLinkedList implements LinkedList {

  private _head : SinglePointedNode | null;
  private _size : number;
  constructor(data? : LinkedListValueType)
  {
    this._head = data ? new SinglePointedNode(data) : null;
    this._size = this._head ? 1 : 0;
  }
  // Getters
  public get head(): SinglePointedNode | null  { return this._head; };
  public get size(): number { return this._size; }
  // Setters
  public set head(node : SinglePointedNode | null) {
    this._head = node ? node : null;
  }
  public set next(node: SinglePointedNode) {
    this.head ? this.head.next = node : this.head = node;
  }
  // Insertion Methods
  prepend(data: number): SinglePointedNode {
    const node = new SinglePointedNode(data);
    if(!this.head) this.head = node;
    else {
      node.next = this.head;
      this.head = node;
    }
    ++this._size;
    return node;
  }
  append(data: number): SinglePointedNode {
    const node = new SinglePointedNode(data);
    if(!this.head) this.head = node;
    else {
      let current = this.head;
      while(current.next !== this.head && current.next) { 
        current = current.next;
      }
      node.next = this.head;
      current.next = node;
    }
    ++this._size;
    return node;
  }
  insertAfter(data: number, node: SinglePointedNode): SinglePointedNode {
    const _node = new SinglePointedNode(data)
    if(!this.head) this.head = _node;
    else {
      let current = this.head;
      while(current.next !== null && current.id !== node.id) { 
        current = current.next; 
      }
      if(current.next && current.next.next) {
        _node.next = current.next.next;
      }
      current.next = _node;
    }
    ++this._size;
    return _node;
  }
  // Deletion Methods
  delete(data: number): void {
    if(!this.head) {
      this.head = null;
      --this._size;
    }
    let current = this.head;
    while(current) {
      if(current.next && current.next.value === data){
        if(current.next.next) {
          current.next = current.next.next;
        }
        else current.next = null;
      }
      current = current.next;
    }
  }
  deleteAt(position: number): void {
    let current = this.head;
    let currentPosition = 1;
    while (
      current &&
      currentPosition < position + 1 &&
      position < this.size + 1
    ) {
      if(currentPosition === position - 1) {
        if(current.next) {
          if(current.next.next) {
            current.next = current.next.next;
          }
          else current.next = null;
        }
        --this._size;
      }
      current = current.next;
    }
  }
  deleteNode(node: SinglePointedNode): void {
    if(this.head === node) {
      this.head = null;
      --this._size;
    }
    let current = this.head;
    while(current) {
      if(current.next === node) {
        if(current.next.next){
          current.next = current.next.next;
        } else {
          current.next = null;
        }
        --this._size;
      }
      current = current.next;
    }
  }
  // Search methods
  isEmpty(): boolean {
    return this._head ? true : false;
  }
  search(data: number): SinglePointedNode | null {
    let current = this.head;
    while(current) {
      if(current.value === data) {
        return current;
      }
      current = current.next;
    }
    return current;
  }
  contains(data: number): boolean {
    let current = this.head;
    while(current) {
      if(current.value === data) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
  at(position: number): SinglePointedNode | null {
    let currentNode = this.head;
    let currentPosition = 1;
    while (
      currentNode &&
      currentPosition < position + 1 &&
      position < this.size + 1
    ) {
      if(currentPosition === position - 1) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }
  // Manipulation Methods
  toArray(): Array<SinglePointedNode | null> {
    let current = this.head;
    let nodes = [current];
    while (current) {
      nodes.push(current.next);
      current = current.next;
    }
    return nodes;
  }
  reverse(): void {
    
  }
  concatenate(list: LinkedList): void {
    let current = this.head;
    while(current){
      while(current.next){
        current.next = current.next.next;
      }
      current.next = list.head;
      while(current.next){
        current.next = current.next.next;
      }
    }
  }
}
