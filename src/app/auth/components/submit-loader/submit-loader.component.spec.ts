import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitLoaderComponent } from './submit-loader.component';

describe('SubmitLoaderComponent', () => {
  let component: SubmitLoaderComponent;
  let fixture: ComponentFixture<SubmitLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitLoaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
