import { Component } from '@angular/core';
import { FlashCard } from '../models/FlashCard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  current : number = 0;
  cards : FlashCard[] = [
    new FlashCard("First", "Second"),
    new FlashCard("Third", "Fourth"),
    new FlashCard("Fifth", "Sixth"),
  ];
  card : FlashCard = this.cards[this.current];
  changeCard(num: number)
  {
    const next_pos = this.current + num;
    if(next_pos > -1 && next_pos < this.cards.length){ this.current = next_pos; }
    else if( next_pos === -1 ) { this.current = this.cards.length - 1; }
    else { this.current = 0; }
    this.card = this.cards[this.current];
  };

}
