import { Component, EventEmitter, Output } from '@angular/core';
import { DataStructures } from '../../shared/models/DataStructures';

@Component({
  selector: 'app-data-structure-choice',
  templateUrl: './data-structure-choice.component.html',
  styleUrls: ['./data-structure-choice.component.scss']
})
export class DataStructureChoiceComponent {
  @Output() select = new EventEmitter<DataStructures>();
  dataStructures: DataStructures[] = [
    'Single Linked List',
    'Double Linked List',
    'Circular Linked List',
    // 'Static Array',
    // 'Dynamic Array'
  ]
  selected = this.dataStructures[0];
  handleSelect(){
    this.select.emit(this.selected)
  }
}
