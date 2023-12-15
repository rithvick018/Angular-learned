import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retail-follow-insta',
  templateUrl: './retail-follow-insta.component.html',
  styleUrls: ['./retail-follow-insta.component.css']
})
export class RetailFollowInstaComponent implements OnInit {

  instaImages=[
    {id: 1, imageUrl: "./assets/notebook_1.jpeg", hoverIcon: "./assets/instagram.png"},
    {id: 2, imageUrl: "./assets/storybook_1.jpg", hoverIcon: "./assets/instagram.png"},
    {id: 3, imageUrl: "./assets/color_pencil_1.jpg", hoverIcon: "./assets/instagram.png"},
    {id: 4, imageUrl: "./assets/notebook_1.jpeg", hoverIcon: "./assets/instagram.png"}
  ];
  constructor() { 
  }

  ngOnInit(): void {
  }

}
