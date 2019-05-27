import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquiposListComponent } from './equipos-list/equipos-list.component';
const routes: Routes = [
  {
    path: '',
    component: EquiposListComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquiposRoutingModule { }
