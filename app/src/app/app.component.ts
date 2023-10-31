import { Component } from '@angular/core';
import { LinkedList } from './shared/models/LinkedList';
import { Node } from './shared/models/Node';
import { DataStructures, IDataStructures } from './shared/models/DataStructures';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  list = new LinkedList();
  nodes : Node[] = [];
  selected : DataStructures | null = null;
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
      this.list = new LinkedList();
      for (let index = 0; index < 10; index++) {
        const randomNumber = this.generateRandomNumber(100000, 0);
        this.list.insertFront(randomNumber);
      }
    }
  }
}
