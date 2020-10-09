import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsExpertComponent } from './about-us-expert.component';

describe('AboutUsExpertComponent', () => {
  let component: AboutUsExpertComponent;
  let fixture: ComponentFixture<AboutUsExpertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUsExpertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
