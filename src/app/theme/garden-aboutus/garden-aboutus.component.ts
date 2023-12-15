import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-garden-aboutus',
  templateUrl: './garden-aboutus.component.html',
  styleUrls: ['./garden-aboutus.component.css']
})
export class GardenAboutusComponent implements OnInit {

  images: Array<any> =[
    {imageUrl:"./assets/work_image_3.jpg",heading:"Our Mission",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eligendi, excepturi repellendus odio, amet tempore numquam est quam deserunt earum corporis blanditiis placeat voluptatem culpa?Inventore optio voluptatem provident quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eligendi, excepturi repellendus odio, amet tempore numquam est quam deserunt earum corporis blanditiis placeat voluptatem culpa? Inventore optio voluptatem provident quo."},
    {imageUrl:"./assets/work_image_2.jpg",heading:"Our Vision",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eligendi, excepturi repellendus odio, amet tempore numquam est quam deserunt earum corporis blanditiis placeat voluptatem culpa? Inventore optio voluptatem provident quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eligendi, excepturi repellendus odio, amet tempore numquam est quam deserunt earum corporis blanditiis placeat voluptatem culpa? Inventore optio voluptatem provident quo."}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
