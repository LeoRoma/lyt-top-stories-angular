import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-multilist-carousel',
  templateUrl: './multilist-carousel.component.html',
  styleUrls: ['./multilist-carousel.component.css']
})
export class MultilistCarouselComponent implements OnInit {
  myInterval = 1500;
  activeSlideIndex = 0;
 

  arts: Object;

  constructor(private api: ApiService) { }

 

  ngOnInit() {

    this.api.getArts().then((response) => {
      response.json().then((api) => {
        this.arts = api;
        console.log(this.arts);
      });
    }).catch((err) => {
      console.log(`Error generated ${err}`);
    });
  }

}
