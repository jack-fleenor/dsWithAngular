import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-data-structure-choice',
  templateUrl: './data-structure-choice.component.html',
  styleUrls: ['./data-structure-choice.component.scss']
})
export class DataStructureChoiceComponent {
  @Output() select = new EventEmitter<string>();
  dataStructures: string[] = [
    'Single Linked List',
    'Double Linked List',
    'Circular Linked List',
    'Static Array',
    'Dynamic Array'
  ]
  selected = this.dataStructures[0];
  handleSelect(){
    console.log(this.selected)
    this.select.emit(this.selected)
  }
}
