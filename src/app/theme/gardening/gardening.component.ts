import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gardening',
  templateUrl: './gardening.component.html',
  styleUrls: ['./gardening.component.css']
})
export class GardeningComponent implements OnInit {

  constructor() { }
  workImages: Array<any>=[
    {id:1,link:"./assets/work_image_1.jpg"},
    {id:2,link:"./assets/work_image_2.jpg"},
    {id:3,link:"./assets/work_image_3.jpg"},
    {id:4,link:"./assets/work_image_1.jpg"},
    {id:5,link:"./assets/work_image_2.jpg"},
  ]
  ngOnInit(): void {
  }

}
