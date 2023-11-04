import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CircularlyLinkedList } from '../shared/models/CircularlyLinkedList';
import { SinglePointedNode } from '../shared/models/SinglePointedNode';

@Component({
  selector: 'app-circularly-linked-list',
  templateUrl: './circularly-linked-list.component.html',
  styleUrls: ['./circularly-linked-list.component.scss']
})
export class CircularlyLinkedListComponent {
  list : CircularlyLinkedList = new CircularlyLinkedList();
  current : SinglePointedNode | null = null;
  code = `export class LinkedList {
    public head : Node | null = null;
    public insert(data : number)
    {
      const node = new SinglePointedNode(data);
      if (!this.head) { this.head = node; }
      else if(this.head)
      {
        const temp = this.head;
        this.head = node;
        this.head.next = temp;
        temp.prev = this.head;
      }
      this._count++;
    }
  }`
  changePosition(direction: 'forward' | 'backward'){
    if(this.list){
      if(direction === 'forward'){
        if(this.current){
          this.current = this.current.next !== null ? this.current.next : this.list.head;
        }
      }
    }
  }
  generateRandomNumber(max: number, min: number){
    return  Math.floor(Math.random() * (max - min + 1) + min)
  }
  generateDummyData(){
    this.list = new CircularlyLinkedList();
    for (let index = 0; index < 10; index++) {
      this.list.append(this.generateRandomNumber(100000, 0));
    }
    this.current = this.list.head;
  }
}
