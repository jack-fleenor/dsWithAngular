import { Component, Input } from '@angular/core';
import { SingleLinkedList } from '../shared/models/SingleLinkedList';
import { LinkedList } from '../shared/models/LinkedList';

@Component({
  selector: 'app-single-linked-list',
  templateUrl: './single-linked-list.component.html',
  styleUrls: ['./single-linked-list.component.scss']
})
export class SingleLinkedListComponent {
  @Input() list : SingleLinkedList = new SingleLinkedList();
  constructor()
  {}

}
