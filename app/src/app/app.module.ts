import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AddFlashcardComponent } from './add-flashcard/add-flashcard.component';
import { FlashCardsComponent } from './flash-cards/flash-cards.component';


@NgModule({
  declarations: [
    AppComponent,
    AddFlashcardComponent,
    FlashCardsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
