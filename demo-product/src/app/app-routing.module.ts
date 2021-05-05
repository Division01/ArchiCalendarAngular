import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SemaineComponent } from './semaine/semaine.component';
import { SemaineAddComponent } from './semaine-add/semaine-add.component';



const routes: Routes = [
{
  path: 'semaines' ,
  component: SemaineComponent
}
{
  path: 'semaine-add',
  component: SemaineAddComponent
}
{
  path: '',
  redirectTo: '/semaines',
  pathMatch: pathMatch:'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
