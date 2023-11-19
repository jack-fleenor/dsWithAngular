import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularlyLinkedListComponent } from './circularly-linked-list.component';

describe('LinkedListComponent', () => {
  let component: CircularlyLinkedListComponent;
  let fixture: ComponentFixture<CircularlyLinkedListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CircularlyLinkedListComponent]
    });
    fixture = TestBed.createComponent(CircularlyLinkedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
