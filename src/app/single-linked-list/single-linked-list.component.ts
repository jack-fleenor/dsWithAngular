import { Component, Input } from '@angular/core';
import { SingleLinkedList } from '../shared/models/SingleLinkedList';
import { LinkedList } from '../shared/models/LinkedList';

@Component({
  selector: 'app-single-linked-list',
  templateUrl: './single-linked-list.component.html',
  styleUrls: ['./single-linked-list.component.scss']
})
export class SingleLinkedListComponent {
  @Input() list : SingleLinkedList = new SingleLinkedList();
  code = `export class LinkedList {
    public head : Node | null = null;
    public insert(data : number)
    {
      const node = new Node(data);
      if(!this.head) this.head = node;
      else {
        node.next = this.head;
        this.head = node;
      }
      ++this._count;
      return node;
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
  generateRandomNumber(max: number, min: number){
    return  Math.floor(Math.random() * (max - min + 1) + min)
  }
  generateDummyData(){
    this.list = new SingleLinkedList();
    for (let index = 0; index < 10; index++) {
      const randomNumber = this.generateRandomNumber(100000, 0);
      this.list.insertFront(randomNumber);
    }
  }
  constructor()
  {}

}
