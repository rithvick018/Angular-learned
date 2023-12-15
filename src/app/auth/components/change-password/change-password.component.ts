import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm!: FormGroup;
  constructor() { 
    this.changePasswordForm = new FormGroup({
      password : new FormControl('',[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10)
      ]),
      confirmPassword : new FormControl('',[
        Validators.required
      ])
    }
    )
  }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.changePasswordForm.valid){
      console.log(this.changePasswordForm.value);
    }
  }
  passwordCompare(){
    this.changePasswordForm?.get('password')?.value === this.changePasswordForm?.get('confirmPassword')?.value ? null : this.changePasswordForm?.get('confirmPassword')?.setErrors({passwordMismatch: true})
  }
}
