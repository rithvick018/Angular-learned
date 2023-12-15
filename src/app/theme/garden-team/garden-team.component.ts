import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-garden-team',
  templateUrl: './garden-team.component.html',
  styleUrls: ['./garden-team.component.css']
})
export class GardenTeamComponent implements OnInit {
  teamMembers: Array<any>=[
    {id:1,name:"John Harris",position:"ceo & owner",link:"./assets/work_image_2.jpg"},
    {id:1,name:"Dan Western",position:"senior supervisor",link:"./assets/work_image_2.jpg"},
    {id:1,name:"Ammenda Meery",position:"sales manager",link:"./assets/work_image_2.jpg"},
    {id:1,name:"Kevin Tylor",position:"senior worker",link:"./assets/work_image_2.jpg"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
