import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataStructureChoiceComponent } from './data-structure-choice.component';

describe('DataStructureChoiceComponent', () => {
  let component: DataStructureChoiceComponent;
  let fixture: ComponentFixture<DataStructureChoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataStructureChoiceComponent]
    });
    fixture = TestBed.createComponent(DataStructureChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
