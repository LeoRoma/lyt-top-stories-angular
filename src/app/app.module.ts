import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { MultilistCarouselComponent } from './multilist-carousel/multilist-carousel.component';
import { BooksComponent } from './books/books.component';
import { TelevisionComponent } from './television/television.component';
import { MusicComponent } from './music/music.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routingComponents,
    MultilistCarouselComponent,
    BooksComponent,
    TelevisionComponent,
    MusicComponent,
  ],
  imports: [
    BrowserModule,
    CarouselModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
