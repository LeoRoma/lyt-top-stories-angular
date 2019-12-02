import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-television',
  templateUrl: './television.component.html',
  styleUrls: ['./television.component.css']
})
export class TelevisionComponent implements OnInit {

  constructor(private api: ApiService) { }

  arts: Object;
  television = new Array();

  ngOnInit() {
    this.api.getArts().then((response) => {
      response.json().then((api) => {
        this.arts = api.results;
        for (let i = 0; i <= 50; i++){
          if(this.arts[i].subsection === 'Television'){
            this.television.push(this.arts[i]);
          }
        }
       
      });
    }).catch((err) => {
      console.log(`Error generated ${err}`);
    });
  }

}
