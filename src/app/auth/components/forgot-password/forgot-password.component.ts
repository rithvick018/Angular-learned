import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  message: any;
  forgotPasswordForm !: FormGroup;
  constructor( public auth: AuthService, public snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.forgotPasswordForm = new FormGroup({
      email: new FormControl(null,[
        Validators.required,
        Validators.email
      ])
    })
    this.auth.messages.subscribe(res => this.message = res);
  }
  sendMail(){
    if(this.forgotPasswordForm.valid){
      this.auth.forgotPassword(this.forgotPasswordForm.value).subscribe({
        next:(res:any)=>{
          this.snackBar.open("Mail sended..","",{duration:4000})
        },
        error:(err:any)=>{
          this.snackBar.open("Mail not sended..","",{duration:4000})
        }
      })
    }
  }
} 
