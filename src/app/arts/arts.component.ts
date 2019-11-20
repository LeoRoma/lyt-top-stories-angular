import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-arts',
  templateUrl: './arts.component.html',
  styleUrls: ['./arts.component.css']
})
export class ArtsComponent implements OnInit {

  arts: Object;
  imgs: Object;
  constructor(private api: ApiService) { }

  ngOnInit() {
    // this.api.getArts().subscribe(
    //   api => this.arts = api
    // )
    
    this.api.getArts().then((response) => {
      response.json().then((api) => {
        this.arts = api.results;
        console.log(this.arts);
      });
    }).catch((err) => {
      console.log(`Error generated ${err}`);
    });

    this.api.getArts().then((response) => {
      response.json().then((api) => {
        this.imgs = api.results;
        console.log('images here');
        console.log(this.imgs); 
      });
    }).catch((err) => {
      console.log(`Error generated ${err}`);
    });
    
  }
  
}
