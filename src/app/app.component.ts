import { Component } from '@angular/core';
import { DataStructures } from './shared/models/DataStructures';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selected : DataStructures = "Single Linked List";
  constructor(){
  }
  handleEvent(e: DataStructures){
    this.selected = e;
  }
}
