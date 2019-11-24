import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtsComponent } from './arts/arts.component';
import { ArtAndDesignComponent } from './art-and-design/art-and-design.component';

const routes: Routes = [
  {
    path: 'arts',
    component: ArtsComponent
  },
  {
    path: 'art-and-design',
    component: ArtAndDesignComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
