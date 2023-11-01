import { Component, Input } from '@angular/core';
import { DoubleLinkedList } from '../shared/models/DoubleLinkedList';
import { LinkedList } from '../shared/models/LinkedList';

@Component({
  selector: 'app-double-linked-list',
  templateUrl: './double-linked-list.component.html',
  styleUrls: ['./double-linked-list.component.scss']
})
export class DoubleLinkedListComponent {
  @Input() list : DoubleLinkedList = new DoubleLinkedList();
  constructor()
  {}

}
