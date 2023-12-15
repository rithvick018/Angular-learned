import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import {  AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, timer, } from 'rxjs';
import { switchMap,map } from 'rxjs/operators';
import { HttpService } from 'src/app/common/service/http.service';


@Injectable({
  providedIn: 'root'
})
export class AsyncService {

  constructor( private http: HttpService) { }

  static asyncEmailValidation(employeeServie :AuthService):AsyncValidatorFn{
    return (control: AbstractControl): Promise<ValidationErrors |null> |Observable<ValidationErrors | null> =>{
      return timer(500).pipe(switchMap(()=>{
        return employeeServie.checkEmail(control.value).pipe(map((res:any)=>{
          return res?.data?.emailExist ? {emailExist : true} :null
        }))
      }))
    }
  }

 
}


