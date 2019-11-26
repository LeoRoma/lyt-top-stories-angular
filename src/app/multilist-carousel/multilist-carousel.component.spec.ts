import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultilistCarouselComponent } from './multilist-carousel.component';

describe('MultilistCarouselComponent', () => {
  let component: MultilistCarouselComponent;
  let fixture: ComponentFixture<MultilistCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultilistCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultilistCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
