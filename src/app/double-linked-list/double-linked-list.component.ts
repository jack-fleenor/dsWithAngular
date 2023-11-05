import { Component, Input } from '@angular/core';
import { DoubleLinkedList } from '../shared/models/DoubleLinkedList';
import { DoublePointedNode } from '../shared/models/DoublePointedNode';

@Component({
  selector: 'app-double-linked-list',
  templateUrl: './double-linked-list.component.html',
  styleUrls: ['./double-linked-list.component.scss']
})
export class DoubleLinkedListComponent {
  list : DoubleLinkedList = new DoubleLinkedList();
  current : DoublePointedNode | null = null;
  code = `
  export class DoubleLinkedList implements LinkedList {
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
      if (!this.head) { this.head = node; }
      else if(this.head)
      {
        const temp = this.head;
        this.head = node;
        this.head.next = temp;
        temp.prev = this.head;
      }
      ++this._size;
      return node;
    }
    append(data: number): DoublePointedNode {
      const node = new DoublePointedNode(data);
      if(!this.head) this.head = node;
      else {
        let current = this.head;
        while(current.next !== null) { current = current.next; }
        node.prev = current;
        current.next = node;
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
  `
  currentPosition : number = 1;
  changePosition(direction: 'forward' | 'backward'){
    if(this.list){
      if(direction === 'forward') { this.current = this.current ? this.current.next : null; }
      else this.current = this.current ? this.current.prev : null;
    }
  }
  generateRandomNumber(max: number, min: number){
    return  Math.floor(Math.random() * (max - min + 1) + min)
  }
  generateDummyData(){
    this.list = new DoubleLinkedList();
    for (let index = 0; index < 10; index++) {
      this.list.append(this.generateRandomNumber(100000, 0));
    }
    this.current = this.list.head;
  }
}
