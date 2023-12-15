import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterUserComponent } from './register-user.component';
import { AuthService } from '../../service/auth.service';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatInputModule } from "@angular/material/input";
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';

let err:boolean;
class MockAuthService{
  messages = new BehaviorSubject<any>("ABCD");
  registerUser(){
    if(!err){
      return of({

      })
    }else{
      return throwError({ error: { error: 'test' } });
    }
  }
}
class MockRouter{
  navigate(){
    return;
  }
}
class MockMatSnackBar{
  open(){
    return;
  }
}
describe('RegisterUserComponent', () => {
  let component: RegisterUserComponent;
  let fixture: ComponentFixture<RegisterUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterUserComponent ],
      providers:[
        { provide: AuthService, useClass: MockAuthService},
        { provide: Router, useClass: MockRouter},
        { provide: MatSnackBar, useClass: MockMatSnackBar}
      ],
      imports:[ MatInputModule,MatDatepickerModule,MatNativeDateModule,BrowserAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.ngOnInit();
    // expect(component).toBeTruthy();
  });
  it("should call onSubmit res",()=>{
    component.userForm = new FormGroup({
      firstName: new FormControl('Rithvick'),
      lastName: new FormControl('Roshan'),
      email: new FormControl('rithvick@mailinator.com'),
      password: new FormControl('Admin@1234'),
      dateOfBirth: new FormControl('30-03-2002'),
    });
    err = false;
    component.onSubmit()
  });
  it("should call onSubmit err",()=>{
    component.userForm = new FormGroup({
      firstName: new FormControl('Rithvick'),
      lastName: new FormControl('Roshan'),
      email: new FormControl('rithvick@mailinator.com'),
      password: new FormControl('Admin@1234'),
      dateOfBirth: new FormControl('30-03-2002'),
    });
    err = true;
    component.onSubmit()
  })
  it("should call onSubmit invalid form",()=>{
    component.onSubmit()
  })
});
