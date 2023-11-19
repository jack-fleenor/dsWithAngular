import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoublePointedNodeComponent } from './double-pointed-node.component';

describe('DoublePointedNodeComponent', () => {
  let component: DoublePointedNodeComponent;
  let fixture: ComponentFixture<DoublePointedNodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoublePointedNodeComponent]
    });
    fixture = TestBed.createComponent(DoublePointedNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
