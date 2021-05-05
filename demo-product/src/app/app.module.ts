import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { SemaineComponent } from './semaine/semaine.component';
import { SemaineAddComponent } from './semaine-add/semaine-add.component' ;

@NgModule({
  declarations: [
    AppComponent,
    SemaineComponent,
    SemaineAddComponent
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
