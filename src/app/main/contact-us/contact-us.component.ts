import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  message!: Observable<any>
  contactForm !: FormGroup;
  constructor( private authService: AuthService,
                private snackBar : MatSnackBar,
                ) { }

  ngOnInit(): void {
    this.message = this.authService.messages;
    this.contactForm = new FormGroup({
      firstName: new FormControl(null,[
        Validators.required
      ]),
      lastName: new FormControl(null,[
        Validators.required
      ]),
      email: new FormControl(null,[
        Validators.required,
        Validators.email
      ]),
      countryCode: new FormControl(null,[
        Validators.required
      ]),
      phoneNumber: new FormControl(null,[
        Validators.required
      ]),
      questions: new FormControl(null,[
        Validators.required
      ]),
    })
  }

  onSubmit(form: any){
    if(this.contactForm.valid){
      console.log("form",form);
      
     this.authService.postQuiry(this.contactForm.value).subscribe(res => {
      if(res){
        this.snackBar.open("Your doubts has bee post. Admin will respose you","close",{duration:4000});
        setTimeout(()=>{
          this.contactForm.reset();
          form.resetForm();
              },4000);
        
      }else{
        this.snackBar.open("somthing wrong. plese contact after sometime.","close",{duration:2000})
      }
      

    //   next:(res:any)=>{
    //     // this.routes.navigate(['contact'])

    //     this.snackBar.open("Your doubts has bee post. Admin will respose you","close",{duration:4000})
    //     setTimeout(()=>{
    //     },4000)
    //   },
    //   error:(err:any)=>{
    //     this.snackBar.open("somthing wrong. plese contact after sometime.","close",{duration:2000})
    //   }

     })
      
    }
  }
  canDeactivate(){
    return this.contactForm ? !this.contactForm.dirty : true;
  }
}
