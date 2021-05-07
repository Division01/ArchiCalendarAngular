import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { TmplAstBoundAttribute } from '@angular/compiler';


@Component({
  selector: 'app-semaine-add',
  templateUrl: './semaine-add.component.html',
  styleUrls: ['./semaine-add.component.scss']
})
export class SemaineAddComponent implements OnInit {

  semaine = {  id: 0, title : '', content: '', image:'', createdAt: new Date(), taches : [] };

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  //dans mon subscribe on a un fonction qui, une fois que le produit est envoyé
  //retourne vers la liste des toutes les semaines
  addSemaine(){
    this.rest.addSemaine(this.semaine).subscribe(
      (result) => {this.router.navigate(['/semaines']);}
    )
  }

}
