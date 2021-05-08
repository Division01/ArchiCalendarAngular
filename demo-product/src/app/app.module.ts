import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { SemaineComponent } from './semaine/semaine.component';
import { SemaineAddComponent } from './semaine-add/semaine-add.component';
import { SemaineEditComponent } from './semaine-edit/semaine-edit.component';
import { TacheEditComponent } from './tache-edit/tache-edit.component';
import { TacheAddComponent } from './tache-add/tache-add.component' ;

@NgModule({
  declarations: [
    AppComponent,
    SemaineComponent,
    SemaineAddComponent,
    SemaineEditComponent,
    TacheEditComponent,
    TacheAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
