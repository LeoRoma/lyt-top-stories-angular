import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  subSection: string = "";
  content: string = "hi"

  // setSubSection(): void {
  //   this.subSection = "Dance";
  //   console.log("hello");
  // }

  setHello() {
    this.content = "hello"
    console.log('hello');
  }
}
