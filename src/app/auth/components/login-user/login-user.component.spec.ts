import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginUserComponent } from './login-user.component';
import { AuthService } from '../../service/auth.service';
import { BehaviorSubject, of, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatFormFieldModule, }  from '@angular/material/form-field';
import { FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from "@angular/material/input";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';

let error:boolean;

class MockAuthService {
  loginUser(){
    if(!error){
      return of({
        data:{
          userLoginSuccess:{
            token:"qwertyuioplknbvcd"
          }
        }
      })
    }else{
      return throwError({ error: { error: 'test' } });
    }
    
  }
  messages = new BehaviorSubject<any>("ABCD");
}
class mockMatSnackBar{
  open(){
    return of({})
  }
}
class mockRouter{
  navigate(){
    return of({})
  }
}

describe('LoginUserComponent', () => {
  let component: LoginUserComponent;
  let fixture: ComponentFixture<LoginUserComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginUserComponent ],
      providers:[ 
        {provide: AuthService, useClass: MockAuthService},
        {provide: MatSnackBar, useClass: mockMatSnackBar},
        {provide: Router, useClass: mockRouter},
      ],
      imports:[ MatFormFieldModule,ReactiveFormsModule,MatInputModule,BrowserAnimationsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call onInit', () => {
    expect(component.ngOnInit).toBeTruthy();
  });
  // it('should call onSubmit',()=>{
  //   component.loginForm = new FormGroup({
  //     email : new FormControl('rithvick@mailinator.com'),
  //     password : new FormControl('Admin@1234')
  //   })
  //   error=false;
  //   component.onSubmit();
  // });
  // it('should call onSubmit err',()=>{
  //   component.loginForm = new FormGroup({
  //     email : new FormControl('rithvick@mailinator.com'),
  //     password : new FormControl('Admin@1234')
  //   })
  //   error=true;
  //   component.onSubmit();
  //   // expect(component.onSubmit).toBeTruthy();

  // });
  // it('should call forgotpassword', () => {
  //   component.forgotPassword();
  //   expect(component.forgotPassword).toBeDefined();
  // });
  // it('should call navigate to sign up', () => {
  //   component.navigateSignup();
  //   expect(component.navigateSignup).toBeDefined();
  // });
  
});
