import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'personas',
    loadChildren: "./personas/personas.module#PersonasModule"
  },
  {
    path:'jugadores',
    loadChildren: "./jugadores/jugadores.module#JugadoresModule"
  },
  {
    path:'equipos',
    loadChildren: "./equipos/equipos.module#EquiposModule"
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
