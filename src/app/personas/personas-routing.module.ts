import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonasListComponent } from './personas-list/personas-list.component';
import { PersonaNewComponent } from './persona-new/persona-new.component';
import { PersonaEditComponent } from './persona-edit/persona-edit.component';
const routes: Routes = [
  {
    path: '',
    component: PersonasListComponent
  },
  {
    path:'new',
    component: PersonaNewComponent
  },
  {
    path:'edit/:id',
    component: PersonaEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonasRoutingModule { }
