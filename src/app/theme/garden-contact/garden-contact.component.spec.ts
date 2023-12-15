import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GardenContactComponent } from './garden-contact.component';

describe('GardenContactComponent', () => {
  let component: GardenContactComponent;
  let fixture: ComponentFixture<GardenContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GardenContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GardenContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
