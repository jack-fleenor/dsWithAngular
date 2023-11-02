import { Component, Input } from '@angular/core';
import { DoubleLinkedList } from '../shared/models/DoubleLinkedList';

@Component({
  selector: 'app-double-linked-list',
  templateUrl: './double-linked-list.component.html',
  styleUrls: ['./double-linked-list.component.scss']
})
export class DoubleLinkedListComponent {
  @Input() list : DoubleLinkedList = new DoubleLinkedList();
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
  
}
