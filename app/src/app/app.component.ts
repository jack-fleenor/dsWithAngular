import { Component } from '@angular/core';
import { FlashCard } from '../models/FlashCard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  cards : FlashCard[] = [
    new FlashCard("First", "Second"),
    new FlashCard("Third", "Fourth"),
    new FlashCard("Fifth", "Sixth"),
  ];
}
