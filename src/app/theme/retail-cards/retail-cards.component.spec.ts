import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailCardsComponent } from './retail-cards.component';

describe('RetailCardsComponent', () => {
  let component: RetailCardsComponent;
  let fixture: ComponentFixture<RetailCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetailCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
