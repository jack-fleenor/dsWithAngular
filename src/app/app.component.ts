import { Component } from '@angular/core';
import { DataStructures, IDataStructures } from './shared/models/DataStructures';
import { LinkedList } from './shared/models/LinkedList';
import { SingleLinkedList } from './shared/models/SingleLinkedList';
import { DoubleLinkedList } from './shared/models/DoubleLinkedList';
import { CircularlyLinkedList } from './shared/models/CircularlyLinkedList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selected : DataStructures = "Single Linked List";
  list : LinkedList | null = null;
  constructor(){
  }
  handleEvent(e: DataStructures){
    this.selected = e;
    if(this.selected === IDataStructures.SingleLinkedList){
      this.list = new SingleLinkedList;
    }
    if(this.selected === IDataStructures.DoubleLinkedList){
      this.list = new DoubleLinkedList;
    }
    if(this.selected === IDataStructures.CircularLinkedList){
      this.list = new CircularlyLinkedList;
    }
  }
}
