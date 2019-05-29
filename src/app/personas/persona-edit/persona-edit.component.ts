import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
//import { MatDialog } from '@angular/material';
//import { RepDialogComponent} from '../rep-dialog/rep-dialog.component';
import { MatSnackBar } from '@angular/material';
import { PersonasService } from '../personas.service';

import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-persona-edit',
  templateUrl: './persona-edit.component.html',
  styleUrls: ['./persona-edit.component.css']
})
export class PersonaEditComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  personaData: any = {};
  
  /*emailFormControl: FormControl;
  parametersFormControl: FormControl;
  minDate = new Date();
  dateCtrl: FormControl;*/
  maxDate = new Date();
  //dateCtrl:FormControl;
  personaFormControl = new FormGroup({
    dniFormControl: new FormControl('',[ Validators.required ]),
    nombreFormControl: new FormControl('',[ Validators.required ]),
    apellidoFormControl: new FormControl('',[ Validators.required ]),
    direccionFormControl: new FormControl(''),
    telefonoFormControl: new FormControl(''),
    
  });
  emailFormControl = new FormControl('',[
    Validators.required,
    Validators.email
  ]);
  fechaNacimientoFormControl = new FormControl('',[ Validators.required ]);

  constructor(public personasService: PersonasService,
    public actRoute: ActivatedRoute,
    public router: Router) { }
 
  ngOnInit() {

    this.personasService.getPersona(this.id).subscribe((data: {}) => {
      this.personaData = data;
      console.log(data);
      })

    /*this.emailFormControl = new FormControl('',[
      Validators.required,
      Validators.email
    ]);
    this.parametersFormControl = new FormControl('',[Validators.required ]);
    this.dateCtrl = new FormControl('',[Validators.required ]);*/
  }

  actualizarPersona(){
    this.personasService.updatePersona(this.id, this.personaData).subscribe((data:{}) =>{
      this.router.navigate(['/personas']);
    });

  }

}
