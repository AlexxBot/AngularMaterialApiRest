import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Persona } from '../models/persona';
//import { Persona } from '../interfaces/persona';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  apiPersonasURL = 'http://192.168.1.66:3000/personas/';

  constructor(private httpClient: HttpClient) {
    console.log('persona service is working');
  }

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
  }  

  /*getPersonas(){
    return this.httpClient.get<Persona[]>(this.apiPersonasURL);
  }*/
  getPersonas(): Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(this.apiPersonasURL)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // HttpClient API get() method => Fetch persona
  getPersona(id): Observable<Persona> {
    return this.httpClient.get<Persona>(this.apiPersonasURL + id)
    .pipe(
    retry(1),
    catchError(this.handleError)
    )
  }  

  // HttpClient API post() method => Create persona
  createPersona(persona): Observable<Persona> {
    return this.httpClient.post<Persona>(this.apiPersonasURL, JSON.stringify(persona), this.httpOptions)
    .pipe(
    retry(1),
    catchError(this.handleError)
    )
  }  

  // HttpClient API put() method => Update persona
  updatePersona(id, persona): Observable<Persona> {
    return this.httpClient.put<Persona>(this.apiPersonasURL + id, JSON.stringify(persona), this.httpOptions)
    .pipe(
    retry(1),
    catchError(this.handleError)
    )
  }
  
  // HttpClient API delete() method => Delete employee
  deletePersona(id){
    return this.httpClient.delete<Persona>(this.apiPersonasURL + id, this.httpOptions)
    .pipe(
    retry(1),
    catchError(this.handleError)
    )
  }

  // Error handling 
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
    } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
