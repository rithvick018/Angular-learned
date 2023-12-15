import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsRedirectedComponent } from './ups-redirected.component';

describe('UpsRedirectedComponent', () => {
  let component: UpsRedirectedComponent;
  let fixture: ComponentFixture<UpsRedirectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpsRedirectedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpsRedirectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
