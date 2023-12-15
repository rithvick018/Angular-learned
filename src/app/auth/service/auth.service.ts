import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/common/service/http.service';
import { AbstractControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  messages = new BehaviorSubject<any>("ABCD");
  constructor( private http: HttpService) { }

  registerUser(data : any){
    return this.http.postMethod('http://localhost:3000/v1/user/',data);
  };
  loginUser(data : any){
    // console.log(data);
    // let email = data.email.value
    return this.http.getMethod(`http://localhost:3000/v1/user/login?email=${data.email}&password=${data.password}`);
  }
  forgotPassword(data: any){
    return this.http.postMethod(`http://localhost:3000/v1/user/forgotpassword`,data);
  }
  postQuiry(data : any){
    return this.http.postMethod(`http://localhost:3000/v1/enquiry/post`,data)
  }
  checkEmail(email : any){    
    const data = {email:email};
    return this.http.postMethod(`http://localhost:3000/v1/user/checkmail`,data);
  }
  getMessage(){
    this.http.getJsonMessage('message.json').subscribe(res=>{
      console.log("message:",res);
      this.messages.next(res);
    })
  }
  isAuthenticated(){
    let token;
    const currentUser = JSON.parse(sessionStorage.getItem("currentUserToken") || '');
    if(currentUser && currentUser.token){
      token = currentUser.token;
      return token != null; 
    }
  }
  checkUps(){
    return this.http.getMethod(`http://localhost:3000/ups/upscheck`);
  }
}
