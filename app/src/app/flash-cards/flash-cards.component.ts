import { Component, OnInit, Input } from '@angular/core';
import { FlashCard } from 'src/models/FlashCard';

@Component({
  selector: 'app-flash-cards',
  templateUrl: './flash-cards.component.html',
  styleUrls: ['./flash-cards.component.css']
})
export class FlashCardsComponent {
  @Input() cards : FlashCard[] = [];
  constructor()
  {};
  ngOnInit() : void 
  {};

}
