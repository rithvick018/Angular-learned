import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordComponent } from './change-password.component';
import { FormControl, FormGroup } from '@angular/forms';

describe('ChangePasswordComponent', () => {
  let component: ChangePasswordComponent;
  let fixture: ComponentFixture<ChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call onSubmit',()=>{
    component.changePasswordForm = new FormGroup({
      password: new FormControl('Admin@1234'),
      confirmPassword: new FormControl('Admin@1234')
    });
    component.onSubmit();
  })
  it('should call confirmPassword',()=>{
    component.changePasswordForm = new FormGroup({
      password: new FormControl('Admin@1234'),
      confirmPassword: new FormControl('Admin@')
    });
    component.passwordCompare();
    component.changePasswordForm = new FormGroup({
      password: new FormControl('Admin@1234'),
      confirmPassword: new FormControl('Admin@1234')
    });
    component.passwordCompare();

  })
});
