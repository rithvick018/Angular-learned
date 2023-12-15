import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeBannerComponent } from './practice-banner.component';

describe('PracticeBannerComponent', () => {
  let component: PracticeBannerComponent;
  let fixture: ComponentFixture<PracticeBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticeBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
