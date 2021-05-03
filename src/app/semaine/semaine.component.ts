import { Component, OnInit } from '@angular/core';

import { RestService, Semaine, Taches_semaine } from '../rest.service' ;
import { Router } from '@angular/router';

@Component({
  selector: 'app-semaine',
  templateUrl: './semaine.component.html',
  styleUrls: ['./semaine.component.scss']
})
export class SemaineComponent implements OnInit {

  semaines: Semaine[] = [];

  constructor(public rest:RestService, private router: Router) { }

  ngOnInit(): void {
    this.getSemaines();
  }

  getSemaines(){
    this.rest.getSemaines().subscribe(
      (resp) => {
        console.log(resp);
        this.semaines = resp;
      }
    )
  }

}
