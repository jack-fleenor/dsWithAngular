import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedNodeComponent } from './animated-node.component';

describe('AnimatedNodeComponent', () => {
  let component: AnimatedNodeComponent;
  let fixture: ComponentFixture<AnimatedNodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimatedNodeComponent]
    });
    fixture = TestBed.createComponent(AnimatedNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
