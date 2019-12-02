import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private api: ApiService) { }

  arts: Object;
  books = new Array();

  ngOnInit() {
    this.api.getArts().then((response) => {
      response.json().then((api) => {
        this.arts = api.results;
        for (let i = 0; i <= 50; i++){
          if(this.arts[i].subsection === 'Book Review'){
            this.books.push(this.arts[i]);
          }
        }
       
      });
    }).catch((err) => {
      console.log(`Error generated ${err}`);
    });
  }

}
