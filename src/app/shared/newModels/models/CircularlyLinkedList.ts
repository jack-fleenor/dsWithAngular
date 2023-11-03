import { DoublePointedNode } from "../models/DoublePointedNode";
import { LinkedList, LinkedListValueType } from "./LinkedList";

export class CircularlyLinkedList implements LinkedList {

  private _head : DoublePointedNode | null;
  private _size : number;
  constructor(data? : LinkedListValueType)
  {
    this._head = data ? new DoublePointedNode(data) : null;
    this._size = this._head ? 1 : 0;
  }
  // Getters
  public get head(): DoublePointedNode | null  { return this._head; };
  public get size(): number { return this._size; }
  // Setters
  public set head(node : DoublePointedNode | null) {
    this._head = node ? node : null;
  }
  public set next(node: DoublePointedNode) {
    this.head ? this.head.next = node : this.head = node;
  }
  // Insertion Methods
  prepend(data: number): DoublePointedNode {
    const node = new DoublePointedNode(data);
    console.log(node)
    if (!this.head) { this.head = node; }
    else if(this.head)
    {
      const temp = this.head;
      temp.prev = node;
      node.prev = this.at(this.size);
      this.at(this.size)!.next = node;
      node.next = temp;
      this.head = node;
    }
    ++this._size;
    return node;
  }
  append(data: number): DoublePointedNode {
    const node = new DoublePointedNode(data);
    if(!this.head) this.head = node;
    else {
      const tail = this.at(this.size)
      node.prev = tail;
      node.next = this.head;
      this.head.prev = node;
      tail!.next = node;
    }
    ++this._size;
    return node;
  }
  insertAfter(data: number, node: DoublePointedNode): DoublePointedNode {
    const _node = new DoublePointedNode(data)
    if(!this.head) this.head = _node;
    else {
      let current = this.head;
      while(current.next !== null && current.id !== node.id) { 
        current = current.next; 
      }
      if(current.next && current.next.next) {
        _node.prev = current;
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
          current.next.prev = current;
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
            current.next.prev = current;
          }
          else current.next = null;
        }
        --this._size;
      }
      current = current.next;
    }
  }
  deleteNode(node: DoublePointedNode): void {
    if(this.head === node) {
      this.head = null;
      --this._size;
    }
    let current = this.head;
    while(current) {
      if(current.next === node) {
        if(current.next.next){
          current.next = current.next.next;
          current.next.prev = current;
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
  search(data: number): DoublePointedNode | null {
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
  at(position: number): DoublePointedNode | null {
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
  toArray(): Array<DoublePointedNode | null> {
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
