import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'nyt-top-stories-angular';

  constructor(private titleService: Title) {
    setTitle( newTitle: string) {
      this.titleService.setTitle( newTitle );
    }
  }
}
