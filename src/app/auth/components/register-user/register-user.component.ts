import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AsyncService } from '../../service/async.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  
  messages: any;
  userForm !: FormGroup;
  
  constructor(private authService : AuthService,
              private route: Router,
              private snakeBar: MatSnackBar) { 
   
  }
  
  ngOnInit(): void {
    this.authService.messages.subscribe(res => this.messages = res);
    this.userForm = new FormGroup({
      firstName: new FormControl(null,[
        Validators.required
      ]),
      lastName: new FormControl(null,[
        Validators.required
      ]),
      email: new FormControl(null,[
        Validators.required,
        Validators.email
      ],AsyncService.asyncEmailValidation(this.authService)),
      password: new FormControl(null,[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10)
      ]),
      dateOfBirth: new FormControl(null,[
        Validators.required
      ])   
    })
  }
  onSubmit(){
    
    if(this.userForm.valid){
      this.authService.registerUser(this.userForm.value).subscribe({
        next:(res: any)=>{
          this.route.navigate(['login'])
        },
        error:(err: any)=>{
          this.snakeBar.open("Registration Failed..!","close",{duration:4000})
        }
      })
    }else{
      this.snakeBar.open("Plese fill mandatory filed","close",{duration:4000})
    }
  }
}
