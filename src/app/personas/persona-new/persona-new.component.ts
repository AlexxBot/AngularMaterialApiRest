import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { RepDialogComponent} from '../rep-dialog/rep-dialog.component';
import { MatSnackBar } from '@angular/material';
import { PersonasService } from '../personas.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-persona-new',
  templateUrl: './persona-new.component.html',
  styleUrls: ['./persona-new.component.css']
})
export class PersonaNewComponent implements OnInit {

  //@Input() 
  personaData = { dni: '', nombre: '', apellido: '', direccion: '', telefono: '', email: '', fechaNacimiento: ''}
  
  //personaFormControl: FormControl;
  maxDate = new Date();
  //dateCtrl:FormControl;
  personaFormControl = new FormGroup({
    dniFormControl: new FormControl('',[ Validators.required, Validators.minLength(9),Validators.maxLength(9)]),
    nombreFormControl: new FormControl('',[ Validators.required ]),
    apellidoFormControl: new FormControl('',[ Validators.required ]),
    direccionFormControl: new FormControl(''),
    telefonoFormControl: new FormControl('',[Validators.minLength(9),Validators.maxLength(9)])
  });

  emailFormControl = new FormControl('@hotmail.com',[
    Validators.required,
    Validators.email
  ]);
  fechaNacimientoFormControl = new FormControl('',[ Validators.required ]);

  constructor(private personasService: PersonasService, public dialog: MatDialog, public snackbar: MatSnackBar, public router: Router) { }


  
  ngOnInit() {
    /*this.personaFormControl = new FormControl('',[
      Validators.required,
      Validators.email
    ]);
    this.dateCtrl = new FormControl('',[Validators.required ]);*/
  }

  insertarPersona(){
    console.log(this.personaData);
    this.personasService.createPersona(this.personaData).subscribe((data:{}) =>{
      this.router.navigate(['/personas'])
    });

  }
  openUndoSnackBar(){
    const snackbarRef = this.snackbar.open('Customer saved', 'UNDO',{
      horizontalPosition:'end'
    });

    snackbarRef.onAction().subscribe(() => {
      alert('Undo that save!');
    });
  }
  openRepDialog(){
    const dialogRef = this.dialog.open(RepDialogComponent,{
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result =>{
      alert('User chose ${result}');
    });
  }

}
