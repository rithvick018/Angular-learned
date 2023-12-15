import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  messages : any; 
  loginForm !: FormGroup;
  constructor( private authService : AuthService,
                private route: Router,
                private snackBar : MatSnackBar
                ) { }
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null,[
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null,[
        Validators.required,
      ]) 
    })
    this.authService.messages.subscribe(res => this.messages = res);
    console.log('login user component');
  }
  onSubmit(){
    if(this.loginForm.valid){
      let data = this.loginForm.value    
    this.authService.loginUser(data)
    .subscribe({
      next:(res:any)=>{
        if(res && res.data && res.data.userLoginSuccess && res.data.userLoginSuccess.token){
          sessionStorage.setItem("currentUserToken",JSON.stringify({token:res.data.userLoginSuccess.token}));
        }
        this.route.navigate(['app'])
        this.snackBar.open("Login success","close",{duration:1000})
      },
      error:(err:any)=>{
        this.snackBar.open("User login failed..!","close",{duration:4000});
      }
    })
    }
  }
  forgotPassword(){
    this.route.navigate(['forgotpassword'])
  }
  navigateSignup(){
    this.route.navigate(['signup'])
  }
}
