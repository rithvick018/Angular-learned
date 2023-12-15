import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpService } from 'src/app/common/service/http.service';
import { of, throwError } from 'rxjs';

let posted:boolean;
let currentUser:any;

class mockHttpService{
  postMethod(){
      return of({})
  }
  getMethod(){
    return of({})
  }
  getJsonMessage(){
    return of({})
  }
}
describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[{provide:HttpService, useClass: mockHttpService}]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should call registerUser', () => {
    let data = {}
    posted=true;
    service.registerUser(data).subscribe(()=>{
      
    })
    expect(service.registerUser).toBeDefined();
  });
  it('should call loginUser', () => {
    let data = {}
    posted=true;
    service.loginUser(data).subscribe(()=>{
      
    })
    expect(service.loginUser).toBeDefined();
  });
  it('should call forgotPassword', () => {
    let data = {}
    service.forgotPassword(data).subscribe(()=>{
      
    })
    expect(service.forgotPassword).toBeDefined();
  });
  it('should call postQuiry', () => {
    let data = {}
    service.postQuiry(data).subscribe(()=>{
      
    })
    expect(service.postQuiry).toBeDefined();
  });
  it('should call checkEmail', () => {
    let email="rithvick@mailinator.com"
    service.checkEmail(email).subscribe(()=>{})
    expect(service.checkEmail).toBeDefined();
  });
  it('should call getMessage', () => {
    service.getMessage();
    expect(service.getMessage).toBeDefined();
  });
  it('should call isAuthenticated', () => {
    currentUser ={
      token:"sdfghjklknboikjnbvfdghcdedfghjk"
    }
    service.isAuthenticated();
    expect(service.isAuthenticated).toBeDefined();
  });
});
