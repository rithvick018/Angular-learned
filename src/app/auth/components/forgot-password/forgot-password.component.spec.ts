import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordComponent } from './forgot-password.component';
import { AuthService } from '../../service/auth.service';
import { BehaviorSubject, of, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatInputModule } from "@angular/material/input";
import { MatFormField } from '@angular/material/form-field';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, }  from '@angular/material/form-field';

let res:any;
class MockAuthService{
  forgotPassword(){
    if(res){
      return of({})
    }
    else{
      return throwError({ error: { error: 'test' } });
    }
  }
  messages = new BehaviorSubject<any>("ABCD");
}
class MockSnackBar{
  open(){
    return of({})
  }
}
describe('ForgotPasswordComponent', () => {
  let component: ForgotPasswordComponent;
  let fixture: ComponentFixture<ForgotPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotPasswordComponent ],
      providers:[
        {provide: AuthService, useClass: MockAuthService},
        {provide: MatSnackBar, useClass: MockSnackBar}
      ],
      imports:[ ReactiveFormsModule,MatInputModule,BrowserAnimationsModule, MatFormFieldModule], 
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call snedMail function',()=>{
    component.forgotPasswordForm = new FormGroup({
      email: new FormControl('rithvick')
    })
    res = true;
    component.sendMail();
  })
  it('should call snedMail function err',()=>{
    component.forgotPasswordForm = new FormGroup({
      email: new FormControl('rithvick')
    })
    res = false;
    component.sendMail();
  })

});
