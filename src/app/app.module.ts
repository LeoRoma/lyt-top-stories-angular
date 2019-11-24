import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtsComponent } from './arts/arts.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ArtAndDesignComponent } from './art-and-design/art-and-design.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtsComponent,
    HeaderComponent,
    ArtAndDesignComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
