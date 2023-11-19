import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePointedNodeComponent } from './single-pointed-node.component';

describe('NodeComponent', () => {
  let component: SinglePointedNodeComponent;
  let fixture: ComponentFixture<SinglePointedNodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SinglePointedNodeComponent]
    });
    fixture = TestBed.createComponent(SinglePointedNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
