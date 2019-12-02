import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  constructor(private api: ApiService) { }

  arts: Object;
  music = new Array();

  ngOnInit() {
    this.api.getArts().then((response) => {
      response.json().then((api) => {
        this.arts = api.results;
        for (let i = 0; i <= 50; i++){
          if(this.arts[i].subsection === 'Music'){
            this.music.push(this.arts[i]);
          }
        }
       
      });
    }).catch((err) => {
      console.log(`Error generated ${err}`);
    });
  }

}
