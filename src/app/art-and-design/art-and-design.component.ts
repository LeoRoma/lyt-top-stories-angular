import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-art-and-design',
  templateUrl: './art-and-design.component.html',
  styleUrls: ['./art-and-design.component.css']
})
export class ArtAndDesignComponent implements OnInit {

  constructor(private api: ApiService) { }

  arts: Object;
  
  ngOnInit() {
    // this.api.getArts().then((response) => {
    //   response.json().then((api) => {
    //     this.arts = api;
    //     console.log(this.arts);
    //   });
    // }).catch((err) => {
    //   console.log(`Error generated ${err}`);
    // });
  }

}
