import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AddFlashcardComponent } from './add-flashcard/add-flashcard.component';
import { FlashCardsComponent } from './flash-cards/flash-cards.component';
import { FlashCardComponent } from './flash-card/flash-card.component';


@NgModule({
  declarations: [
    AppComponent,
    AddFlashcardComponent,
    FlashCardsComponent,
    FlashCardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
