import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SemaineComponent } from './semaine/semaine.component';
import { SemaineAddComponent } from './semaine-add/semaine-add.component';
import { SemaineEditComponent } from './semaine-edit/semaine-edit.component';


// On crée nos routes, c'est un tableau d'objet
// La troisième est au cas où pas de route n'est select

const routes: Routes = [
{
  path: 'semaines' ,
  component: SemaineComponent
},
{
  path: 'semaine-add',
  component: SemaineAddComponent
},
{
  path: 'semaine-edit/:id',
  component: SemaineEditComponent
},
{
  path: '',
  redirectTo: '/semaines',
  pathMatch:'full'
}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
