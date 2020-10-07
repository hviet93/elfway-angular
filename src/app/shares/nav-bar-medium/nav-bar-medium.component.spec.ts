import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarMediumComponent } from './nav-bar-medium.component';

describe('NavBarMediumComponent', () => {
  let component: NavBarMediumComponent;
  let fixture: ComponentFixture<NavBarMediumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarMediumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
