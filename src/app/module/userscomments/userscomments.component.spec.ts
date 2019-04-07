import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserscommentsComponent } from './userscomments.component';

describe('UserscommentsComponent', () => {
  let component: UserscommentsComponent;
  let fixture: ComponentFixture<UserscommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserscommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserscommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
