import { Component, Input } from '@angular/core';
import { FlashCard } from 'src/models/FlashCard';

@Component({
  selector: 'app-flash-card',
  templateUrl: './flash-card.component.html',
  styleUrls: ['./flash-card.component.scss']
})
export class FlashCardComponent {
  @Input() cards : FlashCard[] = [];
  @Input() card : FlashCard = this.cards[0];
  constructor() { };
  ngOnInit() : void 
  {};
}
