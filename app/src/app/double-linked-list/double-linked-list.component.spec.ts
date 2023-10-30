import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleLinkedListComponent } from './double-linked-list.component';

describe('LinkedListComponent', () => {
  let component: DoubleLinkedListComponent;
  let fixture: ComponentFixture<DoubleLinkedListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoubleLinkedListComponent]
    });
    fixture = TestBed.createComponent(DoubleLinkedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
