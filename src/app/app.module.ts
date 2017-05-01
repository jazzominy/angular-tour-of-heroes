import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule }    from '@angular/http';
import { MaterialModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { APP_BASE_HREF } from "@angular/common";

import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { HeroesComponent }  from './heroes.component';
import { DashboardComponent }  from './dashboard.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroService } from "./hero.service";

import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  imports: [
     BrowserModule,
     FormsModule,
     AppRoutingModule,
     HttpModule,
     InMemoryWebApiModule.forRoot(InMemoryDataService),
     BrowserAnimationsModule,
     MaterialModule.forRoot()
  ],
  declarations: [ AppComponent, HeroesComponent, HeroDetailComponent, DashboardComponent],
  providers:  [HeroService/*,{
      provide:APP_BASE_HREF, useValue:"/"
  }*/],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
