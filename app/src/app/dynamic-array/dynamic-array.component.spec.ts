import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicArrayComponent } from './dynamic-array.component';

describe('DynamicArrayComponent', () => {
  let component: DynamicArrayComponent;
  let fixture: ComponentFixture<DynamicArrayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicArrayComponent]
    });
    fixture = TestBed.createComponent(DynamicArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
