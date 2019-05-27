import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JugadoresListComponent } from './jugadores-list/jugadores-list.component';
const routes: Routes = [
  {
    path: '',
    component: JugadoresListComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JugadoresRoutingModule { }
