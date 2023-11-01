import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SingleLinkedList } from '../shared/models/SingleLinkedList';

@Component({
  selector: 'app-circularly-linked-list',
  templateUrl: './circularly-linked-list.component.html',
  styleUrls: ['./circularly-linked-list.component.scss']
})
export class CircularlyLinkedListComponent {
  @Input() list : SingleLinkedList = new SingleLinkedList();
  constructor()
  {}

}
