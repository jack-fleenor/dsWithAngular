import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FlashCard } from '../../models/FlashCard';

@Component({
  selector: 'app-add-flashcard',
  templateUrl: './add-flashcard.component.html',
  styleUrls: ['./add-flashcard.component.css']
})
export class AddFlashcardComponent implements OnInit {
  frontText : string = "";
  backText : string = "";
  @Output() addFlashCard = new EventEmitter<FlashCard>();
  constructor()
  {}
  
  ngOnInit(): void
  {}

  addNewFlashCard()
  {
    this.addFlashCard.emit(new FlashCard(this.frontText, this.backText));
    this.frontText = "";
    this.backText = "";
  }

}
