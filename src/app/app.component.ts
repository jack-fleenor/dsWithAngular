import { Component } from '@angular/core';
import { SingleLinkedList } from './shared/models/SingleLinkedList';
import { SinglePointedNode } from './shared/models/SinglePointedNode';
import { DataStructures, IDataStructures } from './shared/models/DataStructures';
import { DoubleLinkedList } from './shared/models/DoubleLinkedList';
import { LinkedList } from './shared/models/LinkedList';
import { CircularlyLinkedList } from './shared/models/CircularlyLinkedList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  slist = new SingleLinkedList();
  dlist = new DoubleLinkedList();
  clist = new CircularlyLinkedList();
  nodes : Node[] = [];
  selected : DataStructures = "Single Linked List";
  constructor(){
  }
  handleEvent(e: DataStructures){
    this.selected = e;
  }
  generateRandomNumber(max: number, min: number){
    return  Math.floor(Math.random() * (max - min + 1) + min)
  }
  generateDummyData(){
    if(this.selected === IDataStructures.SingleLinkedList){
      this.slist = new SingleLinkedList();
      for (let index = 0; index < 10; index++) {
        const randomNumber = this.generateRandomNumber(100000, 0);
        this.slist.insertFront(randomNumber);
      }
    }
    if(this.selected === IDataStructures.DoubleLinkedList){
      this.dlist = new DoubleLinkedList();
      for (let index = 0; index < 10; index++) {
        const randomNumber = this.generateRandomNumber(100000, 0);
        this.dlist.insertFront(randomNumber);
      }
    }
    if(this.selected === IDataStructures.CircularLinkedList){
      this.clist = new CircularlyLinkedList();
      for (let index = 0; index < 10; index++) {
        // const randomNumber = this.generateRandomNumber(100000, 0);
        const randomNumber = index + 1;
        this.clist.insertFront(randomNumber);
      }
    }
  }
}
