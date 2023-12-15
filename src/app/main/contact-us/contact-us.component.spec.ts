import { ComponentFixture, TestBed,fakeAsync, tick } from '@angular/core/testing';

import { ContactUsComponent } from './contact-us.component';
import { AuthService } from 'src/app/auth/service/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of, throwError } from 'rxjs';

let error:boolean;
class mockAuthservice{
  postQuiry(){
    if(!error){
      return of({
    
      })
      
    }else{
      return throwError({error:{error:'test'}})
    }
  }
}
class mockSnackbar{
  open(){
    return of({})
  }
}
describe('ContactUsComponent', () => {
  let component: ContactUsComponent;
  let fixture: ComponentFixture<ContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactUsComponent ],
      providers:[
        {provide: AuthService, useClass: mockAuthservice},
        {provide: MatSnackBar, useClass: mockSnackbar},
      ],
      imports:[ MatFormFieldModule,ReactiveFormsModule,MatInputModule,BrowserAnimationsModule]

    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call onSubmit res', fakeAsync(() => {
    let form = new FormGroupDirective([],[])
    component.contactForm = new FormGroup({
      firstName: new FormControl("qwertyuiojb"),
      lastName: new FormControl('wetyuijhbv'),
      email: new FormControl('rithvick@mailinator.com'),
      countryCode: new FormControl('91'),
      phoneNumber: new FormControl('9876323'),
      questions: new FormControl('hello check..?')
    })
    // error=false;
    component.contactForm.reset();
    component.onSubmit(form);
    tick(4000);
  }));
  // it('should call onSubmit err', () => {
  //   let form;
  //   component.contactForm = new FormGroup({
  //     firstName: new FormControl("qwertyuiojb"),
  //     lastName: new FormControl('wetyuijhbv'),
  //     email: new FormControl('rithvick@mailinator.com'),
  //     countryCode: new FormControl('91'),
  //     phoneNumber: new FormControl('9876323'),
  //     questions: new FormControl('hello check..?')
  //   })
  //   error=true;
  //   component.onSubmit(form);
  // });
  it('should call canDeactivate',()=>{
    component.canDeactivate();
  })
});
