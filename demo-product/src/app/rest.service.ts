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
  taches : Array<Tache>;
}

export interface Tache {
  id: number;
  description: string;
  DueDate: Date;
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

  getTache(id: number): Observable<any>{
    return this.http.get<Tache>(endpoint + 'tache/' + id );
  }

  updateTache(tache: Tache): Observable<any>{
    return this.http.put<Tache>(endpoint+ 'tache/' + tache.id, tache);
  }

  addTache(id: number, tache: Tache): Observable<any>{
    return this.http.post(endpoint+ 'tache/' + id, tache);
  }

  deleteSemaine(id: number): Observable<any>{
    return this.http.delete(endpoint+ 'semaines/' + id);
  }

  deleteTache(id: number): Observable<any>{
    return this.http.delete(endpoint+ 'tache/' + id);
  }

  }
