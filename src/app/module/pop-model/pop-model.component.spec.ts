import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopModelComponent } from './pop-model.component';

describe('PopModelComponent', () => {
  let component: PopModelComponent;
  let fixture: ComponentFixture<PopModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
