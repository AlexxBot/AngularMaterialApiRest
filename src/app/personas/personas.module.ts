import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonasRoutingModule } from './personas-routing.module';
import { PersonasListComponent } from './personas-list/personas-list.component';

@NgModule({
  declarations: [PersonasListComponent],
  imports: [
    CommonModule,
    PersonasRoutingModule
  ]
})
export class PersonasModule { }
