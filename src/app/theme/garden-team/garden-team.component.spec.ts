import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GardenTeamComponent } from './garden-team.component';

describe('GardenTeamComponent', () => {
  let component: GardenTeamComponent;
  let fixture: ComponentFixture<GardenTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GardenTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GardenTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
