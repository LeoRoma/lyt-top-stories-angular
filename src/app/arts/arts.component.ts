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
  
  constructor(private api: ApiService) { }

  ngOnInit() {
   
    this.api.getArts().then((response) => {
      response.json().then((api) => {
        this.arts = api;
        // console.log(this.arts);
      });
    }).catch((err) => {
      console.log(`Error generated ${err}`);
    });
  }
  
}
