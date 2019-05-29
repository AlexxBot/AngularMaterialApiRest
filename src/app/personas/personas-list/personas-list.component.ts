import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { PageEvent } from '@angular/material';
import { PersonasService } from '../personas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personas-list',
  templateUrl: './personas-list.component.html',
  styleUrls: ['./personas-list.component.css']
})
export class PersonasListComponent implements OnInit {

  PERSONAS_DATA:any = [];

  displayedColumns: string [] = ['action', 'dni', 'nombre', 'apellido', 'direccion', 'telefono', 'email', 'fechaNacimiento'];
  dataSource: MatTableDataSource<object>;

  length = 100;
  pageIndex = 0;
  pageSize = 10;
  pageSizeOptions = [1,2,5,10];

  @ViewChild(MatSort) sort:MatSort;

  pageEvent:PageEvent;

  constructor(private personasService: PersonasService, public router: Router) {
    /*this.orderService.getData().subscribe( data => {
      ELEMENT_DATA = data;
    });*/
  }

  onPageChange(e) {
    const previousPageIndex = e.previousPageIndex;
    this.pageIndex = e.pageIndex;
    this.pageSize = e.pageSize;
    this.loadData(this.pageIndex, this.pageSize);
  }

  loadData(pageIndex, pageSize){
    this.personasService.getPersonas().subscribe( data => {
      this.PERSONAS_DATA = data;
      console.log(this.PERSONAS_DATA);
      this.dataSource = new MatTableDataSource<object>(this.PERSONAS_DATA.slice(pageIndex*pageSize, pageIndex * pageSize + pageSize));
    });
    //console.log(ELEMENT_DATA);
  }

  ngOnInit() {
    this.loadData(0, this.pageSize);
    //this.dataSource.sort = this.sort;
  }

  selectAll() {
    for(var elm of this.PERSONAS_DATA)
    {
      elm.isChecked = !elm.isChecked;
    }
  }

  Eliminar(event: Event) {
    for(var elm of this.PERSONAS_DATA)
    {
      console.log(elm);
      if(elm.isChecked as Boolean == true)
      {
        console.log(elm._id);
        this.personasService.deletePersona(elm._id).subscribe( data => {
          console.log(data);
        });
      }
    } 
    this.loadData(0, this.pageSize);
    
  }

  eliminarPersona(id: String) {
    if (confirm('Are you sure to delete this record?')) {
      this.personasService.deletePersona(id).subscribe( data => {
        console.log(data);
        this.loadData(0, this.pageSize);
      });
    }  
  }
  editarPersona(id: String) {
    this.router.navigate(['/personas/edit/'+ id ]);
    
  }

}
