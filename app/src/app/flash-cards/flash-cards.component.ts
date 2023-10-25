import { Component, OnInit, Input } from '@angular/core';
import { FlashCard } from 'src/models/FlashCard';

@Component({
  selector: 'app-flash-cards',
  templateUrl: './flash-cards.component.html',
  styleUrls: ['./flash-cards.component.css']
})
export class FlashCardsComponent {
  @Input() cards : FlashCard[] = [];
  current : number = 0;
  constructor()
  {};
  ngOnInit() : void 
  {};
  changeCard(num: number)
  {
    const next_pos = this.current + num;
    if(next_pos > -1 && next_pos < this.cards.length){ this.current = next_pos; }
    else if( next_pos === -1 ) { this.current = this.cards.length - 1; }
    else { this.current = 0; }
  };
}
