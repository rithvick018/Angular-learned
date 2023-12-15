import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailDesignComponent } from './retail-design.component';

describe('RetailDesignComponent', () => {
  let component: RetailDesignComponent;
  let fixture: ComponentFixture<RetailDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailDesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetailDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
