import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SinglePointedNodeComponent } from './nodes/single-pointed-node/single-pointed-node.component';
import {SingleLinkedListComponent } from './datastructures/linked-list/single-linked-list/single-linked-list.component';
import { DoubleLinkedListComponent } from './datastructures/linked-list/double-linked-list/double-linked-list.component';
import { CircularlyLinkedListComponent} from './datastructures/linked-list/circularly-linked-list/circularly-linked-list.component';
import { AddNodeComponent } from './core/add-node/add-node.component';
import { DataStructureChoiceComponent } from './core/data-structure-choice/data-structure-choice.component';
import { StaticArrayComponent } from './datastructures/array/static-array/static-array.component';
import { DynamicArrayComponent } from './datastructures/array/dynamic-array/dynamic-array.component';
import { DoublePointedNodeComponent } from './nodes/double-pointed-node/double-pointed-node.component';
import { AnimatedNodeComponent } from './nodes/animated-node/animated-node.component';

@NgModule({
  declarations: [
    AppComponent,
    SinglePointedNodeComponent,
    SingleLinkedListComponent,
    DoubleLinkedListComponent,
    CircularlyLinkedListComponent,
    AddNodeComponent,
    DataStructureChoiceComponent,
    StaticArrayComponent,
    DynamicArrayComponent,
    DoublePointedNodeComponent,
    AnimatedNodeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
