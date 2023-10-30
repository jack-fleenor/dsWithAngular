import { Component } from '@angular/core';
import { LinkedList } from './shared/models/LinkedList';
import { Node } from './shared/models/Node';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  list = new LinkedList();
  nodes : Node[] = [];
  selected : string | null = null;
  constructor(){
    this.list.insertFront(4);
    this.list.insertBack(5);
    this.list.insertBack(12);
    this.list.insertFront(69);
    this.nodes = this.list.traverse();
  }
  handleEvent(e: string){
    this.selected = e;
  }
}
