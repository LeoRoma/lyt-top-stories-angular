import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtsComponent } from './arts/arts.component';
import { ArtAndDesignComponent } from './art-and-design/art-and-design.component';
import { BooksComponent } from './books/books.component';
import { TelevisionComponent } from './television/television.component';

const routes: Routes = [
  {
    path: 'arts',
    component: ArtsComponent
  },
  {
    path: 'art-and-design',
    component: ArtAndDesignComponent
  },
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'television',
    component: TelevisionComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ArtsComponent, ArtAndDesignComponent, BooksComponent, TelevisionComponent];
