import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CircularlyLinkedList } from '../shared/models/CircularlyLinkedList';

@Component({
  selector: 'app-circularly-linked-list',
  templateUrl: './circularly-linked-list.component.html',
  styleUrls: ['./circularly-linked-list.component.scss']
})
export class CircularlyLinkedListComponent {
  @Input() list : CircularlyLinkedList = new CircularlyLinkedList();
  currentPosition : number = 1;
  changePosition(direction: 'forward' | 'backward'){
    direction === 'forward' ? this.currentPosition++ : this.currentPosition--;
    if(this.currentPosition >= this.list.count()) { this.currentPosition = 1; }
    if(this.currentPosition <= 0) { this.currentPosition = this.list.count(); }
  }
  constructor()
  {}

}
