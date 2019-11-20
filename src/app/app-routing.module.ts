import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtsComponent } from './arts/arts.component';


const routes: Routes = [
  {
    path: 'arts',
    component: ArtsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
