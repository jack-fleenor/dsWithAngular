import { Component, EventEmitter, Output, Input } from '@angular/core';
import { SingleLinkedList } from '../shared/models/SingleLinkedList';
import { DoubleLinkedList } from '../shared/models/DoubleLinkedList';

@Component({
  selector: 'app-add-node',
  templateUrl: './add-node.component.html',
  styleUrls: ['./add-node.component.scss']
})
export class AddNodeComponent {
  @Output() addNodeFront = new EventEmitter<number>();
  @Output() addNodeBack = new EventEmitter<number>();
  @Input() list : SingleLinkedList | DoubleLinkedList | null = null;
  value : number = 0;
  addNewNode(direction: string)
  {
    direction === 'front' ? this.addNodeFront.emit(this.value) : 
    this.addNodeBack.emit(this.value);
    this.value = 0;
  }
  selectNode(e: any){
    console.log(e.target.value);
  }
}
