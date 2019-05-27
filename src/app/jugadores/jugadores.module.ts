import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JugadoresRoutingModule } from './jugadores-routing.module';
import { JugadoresListComponent } from './jugadores-list/jugadores-list.component';

@NgModule({
  declarations: [JugadoresListComponent],
  imports: [
    CommonModule,
    JugadoresRoutingModule
  ]
})
export class JugadoresModule { }
