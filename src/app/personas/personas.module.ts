import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PersonasRoutingModule } from './personas-routing.module';
import { PersonasListComponent } from './personas-list/personas-list.component';

import { PersonaNewComponent } from './persona-new/persona-new.component';
import { RepDialogComponent } from './rep-dialog/rep-dialog.component';

//Material components
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';




import { MatMomentDateModule } from '@angular/material-moment-adapter';

//service
import { PersonasService } from './personas.service';
import { HttpClientModule } from '@angular/common/http';
import { PersonaEditComponent } from './persona-edit/persona-edit.component';

@NgModule({
  declarations: [PersonasListComponent, PersonaNewComponent, RepDialogComponent, PersonaEditComponent],
  imports: [
    CommonModule,
    PersonasRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatMomentDateModule,
    MatTabsModule,

    HttpClientModule
  ],
  providers : [ PersonasService ]
})
export class PersonasModule { }
