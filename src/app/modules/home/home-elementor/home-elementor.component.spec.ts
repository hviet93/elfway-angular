import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeElementorComponent } from './home-elementor.component';

describe('HomeElementorComponent', () => {
  let component: HomeElementorComponent;
  let fixture: ComponentFixture<HomeElementorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeElementorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeElementorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
