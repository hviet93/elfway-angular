import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsClientComponent } from './about-us-client.component';

describe('AboutUsClientComponent', () => {
  let component: AboutUsClientComponent;
  let fixture: ComponentFixture<AboutUsClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUsClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
