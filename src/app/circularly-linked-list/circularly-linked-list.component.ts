import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CircularlyLinkedList } from '../shared/models/CircularlyLinkedList';

@Component({
  selector: 'app-circularly-linked-list',
  templateUrl: './circularly-linked-list.component.html',
  styleUrls: ['./circularly-linked-list.component.scss']
})
export class CircularlyLinkedListComponent {
  @Input() list : CircularlyLinkedList = new CircularlyLinkedList();
  code = `export class LinkedList {
    public head : Node | null = null;
    public insert(data : number)
    {
      const node = new Node(data);
      if (!this.head) { this.head = node; }
      else
      {
        const temp = this.head;
        temp.prev = node;
        node.prev = this.getNodeByPosition(this.count())
        this.getNodeByPosition(this.count())!.next = node;
        node.next = temp;
        this.head = node;
      }
      this._count++;
    }
  }`
  currentPosition : number = 1;
  changePosition(direction: 'forward' | 'backward'){
    direction === 'forward' ? this.currentPosition++ : this.currentPosition--;
    if(this.currentPosition > this.list.count()) { this.currentPosition = 1; }
    if(this.currentPosition <= 0) { this.currentPosition = this.list.count(); }
  }
  constructor()
  {}
  generateRandomNumber(max: number, min: number){
    return  Math.floor(Math.random() * (max - min + 1) + min)
  }
  generateDummyData(){
    this.list = new CircularlyLinkedList();
    for (let index = 0; index < 10; index++) {
      const randomNumber = this.generateRandomNumber(100000, 0);
      this.list.insertFront(randomNumber);
    }
  } 
}
