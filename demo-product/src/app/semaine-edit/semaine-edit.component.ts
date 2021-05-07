import { Component, OnInit } from '@angular/core';
import { RestService, Semaine } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-semaine-edit',
  templateUrl: './semaine-edit.component.html',
  styleUrls: ['./semaine-edit.component.scss']
})
export class SemaineEditComponent implements OnInit {

  // semaine = {  id: 0, title : '', content: '', image:'', createdAt: new Date(), taches : [] };
  semaine : Semaine ;

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { 
    this.semaine = {  id: 0, title : '', content: '', image:'', createdAt: new Date(), taches : [] };
  }

  

  ngOnInit(): void {
    this.rest.getSemaine(this.route.snapshot.params.id).subscribe(
      (data) => {
        this.semaine = data;
      }
    )
  }

  updateSemaine(){
    this.rest.updateSemaine(this.semaine).subscribe(
      (result) => {
        this.router.navigate(['/semaines']);
      },
      (err) => {
        console.log(err);
      }
    )
  }

}
