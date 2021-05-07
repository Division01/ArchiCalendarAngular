import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

const endpoint = "http://localhost:8000/api/";

export interface Semaine {
  id: number;
  title : string;
  content: string;
  image:string;
  createdAt: Date;
  taches : Array<Taches_semaine>;
}

export interface Taches_semaine {
  id: number;
  description: string;
  DueDate: string;
  Done: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  getSemaines(): Observable<any>{
    // console.log(this.http.get<Semaine>(endpoint + 'semaines'));
    return this.http.get<Semaine>(endpoint + 'semaines');
  }

  addSemaine(semaine: Semaine): Observable<any>{
    return this.http.post(endpoint+ 'semaines', semaine);
  }

  updateSemaine(semaine: Semaine): Observable<any>{
    return this.http.put<Semaine>(endpoint+ 'semaines/' + semaine.id, semaine);
  }

  getSemaine(id: number): Observable<any>{
    return this.http.get<Semaine>(endpoint + 'semaines/' + id );
  }

  }
