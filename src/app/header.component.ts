import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

title ='setTitleinArts'

  constructor(private serviceTitle: Title) { }

  setTitleBooks() {
    this.serviceTitle.setTitle("Books");
  }
  ngOnInit(): void {
    throw new Error("Method not implemented");
  }

}
