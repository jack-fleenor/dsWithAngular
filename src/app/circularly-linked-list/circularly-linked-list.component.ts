import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LinkedList } from '../shared/models/LinkedList';
import { Node } from '../shared/models/Node';

@Component({
  selector: 'app-circularly-linked-list',
  templateUrl: './circularly-linked-list.component.html',
  styleUrls: ['./circularly-linked-list.component.scss']
})
export class CircularlyLinkedListComponent {
  @Input() list : LinkedList = new LinkedList();
  constructor()
  {}

}
