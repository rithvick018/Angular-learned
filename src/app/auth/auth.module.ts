import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { coreModule } from '../common/core.module';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { SubmitLoaderComponent } from './components/submit-loader/submit-loader.component';



@NgModule({
  declarations: [
    RegisterUserComponent,
    LoginUserComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    SubmitLoaderComponent,
  ],
  imports: [
    CommonModule,
    coreModule,
  ],
  
})
export class AuthModule { }
