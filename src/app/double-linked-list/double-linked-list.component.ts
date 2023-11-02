import { Component, Input } from '@angular/core';
import { DoubleLinkedList } from '../shared/models/DoubleLinkedList';

@Component({
  selector: 'app-double-linked-list',
  templateUrl: './double-linked-list.component.html',
  styleUrls: ['./double-linked-list.component.scss']
})
export class DoubleLinkedListComponent {
  @Input() list : DoubleLinkedList = new DoubleLinkedList();
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
    if(direction === 'backward')
    {
      if(this.currentPosition === 1){this.currentPosition === this.list.count();}
      else{--this.currentPosition}
    }
    else if(direction === 'forward')
    {
      if(this.currentPosition === this.list.count()){this.currentPosition === 1;}
      else{++this.currentPosition}
    }
  }
  constructor()
  {
    // this.current = list
  }
  generateRandomNumber(max: number, min: number){
    return  Math.floor(Math.random() * (max - min + 1) + min)
  }
  generateDummyData(){
    this.list = new DoubleLinkedList();
    for (let index = 0; index < 10; index++) {
      const randomNumber = this.generateRandomNumber(100000, 0);
      this.list.insertFront(randomNumber);
    }
  } 
}
