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
  code = `export class LinkedList {
    public head : Node | null = null;
    public insert(data : number)
    {
      const node = new DoublePointedNode(data);
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
