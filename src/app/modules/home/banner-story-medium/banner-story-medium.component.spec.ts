import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerStoryMediumComponent } from './banner-story-medium.component';

describe('BannerStoryMediumComponent', () => {
  let component: BannerStoryMediumComponent;
  let fixture: ComponentFixture<BannerStoryMediumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerStoryMediumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerStoryMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
