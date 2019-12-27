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
  artAndDesign = new Array();

  ngOnInit() {
    this.api.getArts().then((response) => {
      response.json().then((api) => {
        this.arts = api.results;
        for (let i = 0; i <= 50; i++) {
          if (this.arts[i].subsection === 'Art & Design') {
            this.artAndDesign.push(this.arts[i]);
          }
        }

      });
    }).catch((err) => {
      console.log(`Error generated ${err}`);
    });

  }

}
