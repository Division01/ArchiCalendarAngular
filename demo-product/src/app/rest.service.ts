import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

const endpoint = "http://localhost:8000/api/";

export interface Semaine {
  id_semaine: number;
  title_semaine : string;
  content_semaine: string;
  image_semaine:string;
  createdAt_semaine: Date;
  taches_semaine : Taches_semaine;
}



export interface Taches_semaine {
  id_tache: number;
  description_tache: string;
  DueDate_tache: string;
  Done_tache: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  getSemaines(): Observable<any>{
    console.log(this.http.get<Semaine>(endpoint + 'semaine'));
    return this.http.get<Semaine>(endpoint + 'semaine');
  }
}
