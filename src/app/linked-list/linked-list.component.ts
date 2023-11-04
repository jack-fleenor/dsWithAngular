import { Component, Input } from '@angular/core';
import { LinkedList } from '../shared/models/LinkedList';
import { Node } from '../shared/models/Node';
import { SingleLinkedList } from '../shared/models/SingleLinkedList';
import { DoubleLinkedList } from '../shared/models/DoubleLinkedList';
import { CircularlyLinkedList } from '../shared/models/CircularlyLinkedList';

@Component({
  selector: 'app-linked-list',
  templateUrl: './linked-list.component.html',
  styleUrls: ['./linked-list.component.scss']
})
export class LinkedListComponent {
  @Input() list : LinkedList | null = null;
  current : Node | null = null;
  code : string = "";
  changePosition(direction: 'forward' | 'backward'){
    if(this.list){
      if(direction === 'forward') { this.current = this.current ? this.current.next : null; }
    }
  }
  generateRandomNumber(max: number, min: number){
    return  Math.floor(Math.random() * (max - min + 1) + min)
  }
  generateDummyData(){
    if(this.list instanceof SingleLinkedList) {
      this.list = new SingleLinkedList();
    }
    if (this.list instanceof DoubleLinkedList) {
      this.list = new DoubleLinkedList();
    }
    if(this.list instanceof CircularlyLinkedList) {
      this.list = new CircularlyLinkedList();
    } else {
      // Default
      this.list = new SingleLinkedList();
    }
    for (let index = 0; index < 10; index++) {
      this.list.append(this.generateRandomNumber(100000, 0));
    }
    this.current = this.list.head;
  }
}
