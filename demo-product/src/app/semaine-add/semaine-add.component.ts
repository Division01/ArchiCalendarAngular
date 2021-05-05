import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/core';


@Component({
  selector: 'app-semaine-add',
  templateUrl: './semaine-add.component.html',
  styleUrls: ['./semaine-add.component.scss']
})
export class SemaineAddComponent implements OnInit {

  semaine = {  id: 0, title : '', content: '', image:'', createdAt: '', taches : '' };

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  addSemaine(){
    this.rest.addSemaine(this.semaine).subscribe(
      (result) => this.router.navigate(['/semaines'])
    )
  }

}
