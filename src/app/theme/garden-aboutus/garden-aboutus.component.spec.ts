import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GardenAboutusComponent } from './garden-aboutus.component';

describe('GardenAboutusComponent', () => {
  let component: GardenAboutusComponent;
  let fixture: ComponentFixture<GardenAboutusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GardenAboutusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GardenAboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
