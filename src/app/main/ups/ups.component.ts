import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-ups',
  templateUrl: './ups.component.html',
  styleUrls: ['./ups.component.css']
})
export class UpsComponent implements OnInit {

  constructor( private authService : AuthService) {  }

  ngOnInit(): void {
  }
  onUpsCheck(){
    console.log("I am ");
    this.authService.checkUps().subscribe(res =>{
      
    })
  }
}
