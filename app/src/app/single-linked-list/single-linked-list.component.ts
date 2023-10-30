import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LinkedList } from '../shared/models/LinkedList';
import { Node } from '../shared/models/Node';

@Component({
  selector: 'app-single-linked-list',
  templateUrl: './single-linked-list.component.html',
  styleUrls: ['./single-linked-list.component.scss']
})
export class SingleLinkedListComponent {
  @Input() list : LinkedList = new LinkedList();
  constructor()
  {}

}
