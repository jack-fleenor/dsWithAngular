import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NodeComponent } from './node/node.component';
import {SingleLinkedListComponent } from './single-linked-list/single-linked-list.component';
import { DoubleLinkedListComponent } from './double-linked-list/double-linked-list.component';
import { CircularlyLinkedListComponent} from './circularly-linked-list/circularly-linked-list.component';
import { AddNodeComponent } from './add-node/add-node.component';
import { DataStructureChoiceComponent } from './data-structure-choice/data-structure-choice.component';

@NgModule({
  declarations: [
    AppComponent,
    NodeComponent,
    SingleLinkedListComponent,
    DoubleLinkedListComponent,
    CircularlyLinkedListComponent,
    AddNodeComponent,
    DataStructureChoiceComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
