import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { AsyncService } from './async.service';
import { HttpService } from 'src/app/common/service/http.service';
import { AuthService } from './auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';

let isExist:boolean;
class mockHttpService{
  postMethod(){
    return of({})
  }
}
class mockAuthService{
  checkEmail(){
    if(isExist){      
      return of({data:{emailExist:true}})
    }else{
      return of({})
    }
  }
}
let authService: AuthService;
describe('AsyncService', () => {
  let service:any =AsyncService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        {provide:HttpService, useClass: mockHttpService},
        {provide: AuthService, useClass: mockAuthService}
      ]
    });
    service = TestBed.inject(AsyncService);
    authService = TestBed.inject(AuthService)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should call asyncEmailValidation', fakeAsync(() => {
    isExist= true;
    const control = new FormGroup({
      email: new FormControl('rithvick@gmail.com',
      [Validators.required,Validators.required],
      AsyncService.asyncEmailValidation(authService)
      )
    });
     tick(500);
    AsyncService.asyncEmailValidation(authService);
    expect(AsyncService.asyncEmailValidation).toBeDefined();

  }));
  it('should call asyncEmailValidation', fakeAsync(() => {
    isExist= false;
    const control = new FormGroup({
      email: new FormControl('rithvick@gmail.com',
      [Validators.required,Validators.required],
      AsyncService.asyncEmailValidation(authService)
      )
    });
     tick(500);
    AsyncService.asyncEmailValidation(authService);
    expect(AsyncService.asyncEmailValidation).toBeDefined();

  }));
});


