import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LinkedList } from '../shared/models/LinkedList';
import { Node } from '../shared/models/Node';

@Component({
  selector: 'app-double-linked-list',
  templateUrl: './double-linked-list.component.html',
  styleUrls: ['./double-linked-list.component.scss']
})
export class DoubleLinkedListComponent {
  @Input() list : LinkedList = new LinkedList();
  constructor()
  {}

}
