import { Component, OnInit } from '@angular/core';
import { RestService, Semaine, Tache } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tache-add',
  templateUrl: './tache-add.component.html',
  styleUrls: ['./tache-add.component.scss']
})
export class TacheAddComponent implements OnInit {

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) {   
  }

  tache = { id: 0, description: '', DueDate: new Date() , Done: false};
  
  ngOnInit(): void {
  }

  addTache(){
    this.rest.addTache(this.route.snapshot.params.id, this.tache ).subscribe(
      (result) => {this.router.navigate(['/semaine-edit/'+ this.route.snapshot.params.id]);}
    )
  }

}
