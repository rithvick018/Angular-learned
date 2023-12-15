import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailFollowInstaComponent } from './retail-follow-insta.component';

describe('RetailFollowInstaComponent', () => {
  let component: RetailFollowInstaComponent;
  let fixture: ComponentFixture<RetailFollowInstaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailFollowInstaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetailFollowInstaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
