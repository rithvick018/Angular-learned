import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailHomeTopCategoryComponent } from './retail-home-top-category.component';

describe('RetailHomeTopCategoryComponent', () => {
  let component: RetailHomeTopCategoryComponent;
  let fixture: ComponentFixture<RetailHomeTopCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailHomeTopCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetailHomeTopCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
