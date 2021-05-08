import { Component, OnInit } from '@angular/core';
import { RestService, Semaine, Tache } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tache-edit',
  templateUrl: './tache-edit.component.html',
  styleUrls: ['./tache-edit.component.scss']
})
export class TacheEditComponent implements OnInit {

  tache : any ;

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { 
    this.tache = { id: 0, description: '', DueDate: new Date() , Done: false};
  }

  ngOnInit(): void {
    this.rest.getTache(this.route.snapshot.params.id).subscribe(
      (data) => {
        console.log(data);
        this.tache = data;
      }
    )
  }

  updateTache(){
    this.rest.updateTache(this.tache).subscribe(
      (result) => {
        this.router.navigate(['/semaines']);
      },
      (err) => {
        console.log(err);
      }
    )
  }


}


