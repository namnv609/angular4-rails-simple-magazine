import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { APP_ROUTINGS } from "./app.routings";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTINGS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
