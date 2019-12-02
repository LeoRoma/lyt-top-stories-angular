import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-multilist-carousel',
  templateUrl: './multilist-carousel.component.html',
  styleUrls: ['./multilist-carousel.component.css']
})
export class MultilistCarouselComponent implements OnInit {

  prev = document.querySelector('.prev');
  next = document.querySelector('.next');

  track = document.querySelector('.track');

  // next.addEventListener('click', () => {
  //   track.style.transform = 'translateX(-${carouselWidht})px';
  // })
  // carouselWidth = document.querySelector('.carousel-container').offsetWidth;

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
